const propelAuth = require('@propelauth/express');
module.exports = propelAuth.initAuth({
    debugMode: true,
    authUrl: 'https://REPLACE_ME.test.propelauth.com',
    apiKey: 'REPLACE_ME'
})
