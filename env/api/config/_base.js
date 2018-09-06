const Path = require('path');

module.exports = {
  server: {
    debug: {
      log: ['error', 'debug'],
      request: ['error']
    },
    port: process.env.PORT || 10000,
    app: {
      root: Path.resolve(__dirname, '..'),
      apiPrefix: process.env.API_PREFIX || '/',
      cookieSettings: {
        ttl: null,
        isSecure: false,
        isHttpOnly: true,
        clearInvalid: false, // remove invalid cookies
        path: '/'
      }
    },
    router: {
      stripTrailingSlash: true
    },
    routes: {
      cors: {
        origin: ['*']
      }
    }
  },
  register: {
    plugins: ['@tanepiper/hapi-auth-jwt', 'inert', 'vision', './404']
  }
};
