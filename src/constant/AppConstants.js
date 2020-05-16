export default Object.defineProperties({}, {
  APP_ENV: {
    value: 'kui-app',
    writable: false,
    enumerable: true,
    configurable: false,
  },
  BASE_URL: {
    value: process.env.VUE_APP_MOCK ? '' : 'http://127.0.0.1/',
    writable: false,
    enumerable: true,
    configurable: false,
  },
  JS_BRIDGE: {
    value: 'KuiJSBridge',
    writable: false,
    enumerable: true,
    configurable: false,
  },
});
