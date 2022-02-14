const { i18n } = require("./i18n.config");
const headers = require("./headers.json");

module.exports = {
  reactStrictMode: true,
  i18n,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.po/,
      use: ["@lingui/loader"],
    });

    return config;
  },
  /* async headers() {
    return headers;
  }, */
};
