import "../styles/globals.css";
import "../styles/global.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { en, zh, es, fr, ru } from "make-plural";

i18n.loadLocaleData({
  en: { plurals: en },
  zh: { plurals: zh },
  es: { plurals: es },
  fr: { plurals: fr },
  ru: { plurals: ru },
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

  return (
    <>
      <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
        <Component {...pageProps} />
      </I18nProvider>
    </>
  );
}

export default MyApp;
