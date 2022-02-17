import "../styles/globals.css";
import "../styles/global.scss";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { en, zh, es, fr, ru, vi } from "make-plural";

i18n.loadLocaleData({
  en: { plurals: en },
  zh: { plurals: zh },
  es: { plurals: es },
  fr: { plurals: fr },
  ru: { plurals: ru },
  vi: { plurals: vi },
});

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

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", "G-LF5XJ57N3H", {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-LF5XJ57N3H"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LF5XJ57N3H', { page_path: window.location.pathname });
            `,
        }}
      />
      <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
        <Component {...pageProps} />
      </I18nProvider>
    </>
  );
}

export default MyApp;
