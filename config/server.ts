export default ({ env }) => ({
  // host: env('HOST', '::1'),//for local development
  host: env('HOST', '0.0.0.0'),//for server
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
