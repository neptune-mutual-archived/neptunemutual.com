import { useLocalStorage } from "@lib/hooks/useLocalStorage";
import Script from "next/script";
import React from "react";

const clarityTrackingCode = process.env.NEXT_PUBLIC_CLARITY_TRACKING_CODE;

const CookieContext = React.createContext({
  accepted: false,
  setAccepted: (_value) => {},
});

export function useCookies() {
  const context = React.useContext(CookieContext);
  if (context === undefined) {
    throw new Error("useCookies must be used within a CookiesProvider");
  }
  return context;
}

export const CookiesProvider = ({ children }) => {
  const [accepted, setAccepted] = useLocalStorage("dev-cookies", false);

  return (
    <CookieContext.Provider value={{ accepted, setAccepted }}>
      {children}
      {accepted && (
        <Script
          id="ms-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityTrackingCode}");
          `,
          }}
        />
      )}
    </CookieContext.Provider>
  );
};
