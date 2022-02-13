const production = require("./headers.production");
const development = JSON.parse(JSON.stringify(production));

// script-src
development[0].values[0] = `${development[0].values[0]} 'unsafe-eval' 'unsafe-inline'`;

// Removing "upgrade-insecure-requests"
development[0].values.splice(3, 1);

module.exports = development;
