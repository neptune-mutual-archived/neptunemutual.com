module.exports = {
  locales: [
    "zh",
    "en",
    "fr",
    "de",
    "id",
    "it",
    "ja",
    "ko",
    "ru",
    "es",
    "el",
    "tr",
  ],
  sourceLocale: "en",
  fallbackLocales: {
    default: "en",
  },
  catalogs: [
    {
      path: "<rootDir>/locales/{locale}/messages",
      include: ["<rootDir>/pages", "<rootDir>/components", "<rootDir>/lib"],
    },
  ],
  format: "po",
};
