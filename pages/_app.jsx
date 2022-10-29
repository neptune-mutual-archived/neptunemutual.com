import "../styles/globals.css";
import "../styles/global.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import {
  zh,
  en,
  fr,
  de,
  id,
  it,
  ja,
  ko,
  ru,
  es,
  el,
  tr,
  vi,
} from "make-plural";

i18n.loadLocaleData({
  zh: { plurals: zh },
  en: { plurals: en },
  fr: { plurals: fr },
  de: { plurals: de },
  id: { plurals: id },
  it: { plurals: it },
  ja: { plurals: ja },
  ko: { plurals: ko },
  ru: { plurals: ru },
  es: { plurals: es },
  el: { plurals: el },
  tr: { plurals: tr },
  vi: { plurals: vi },
});

const clarityTrackingCode = process.env.NEXT_PUBLIC_CLARITY_TRACKING_CODE;

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const locale = router.locale;

  useEffect(() => {
    async function load(l) {
      const { messages } = await import(`../locales/${l}/messages.po`);

      i18n.load(l, messages);
      i18n.activate(l);
    }

    load(locale);
  }, [locale]);

  return (
    <>
      <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
        <Component {...pageProps} />
      </I18nProvider>
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
    </>
  );
}

export default MyApp;
