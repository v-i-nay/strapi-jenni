export default ({ env }) => ({
  host: env('HOST', '::1'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
