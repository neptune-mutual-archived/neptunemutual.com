module.exports = {
  locales: ["zh", "en", "fr", "id", "ja", "ko", "ru", "es", "tr"],
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
