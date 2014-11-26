/**
 * Global adapter config
 * 
 * The `adapters` configuration object lets you create different global "saved settings"
 * that you can mix and match in your models.  The `default` option indicates which 
 * "saved setting" should be used if a model doesn't have an adapter specified.
 *
 * Keep in mind that options you define directly in your model definitions
 * will override these settings.
 *
 * For more information on adapter configuration, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.adapters = {

  // If you leave the adapter config unspecified 
  // in a model definition, 'default' will be used.
  'default': 'disk',

  // Persistent adapter for DEVELOPMENT ONLY
  // (data is preserved when the server shuts down)
  disk: {
    module: 'sails-disk'
  },

  // MySQL is the world's most popular relational database.
  // Learn more: http://en.wikipedia.org/wiki/MySQL
  mysql: {

      module: 'sails-mysql',
      host: process.env.DB_HOST ? process.env.DB_HOST : '127.0.0.1',
      port: 3306,
      user: process.env.DB_USER ? process.env.DB_USER : 'root',
      // Psst.. You can put your password in config/local.js instead
      // so you don't inadvertently push it up if you're using version control
      password: process.env.DB_PASSWORD ? process.env.DB_PASSWORD : '', 
      database: process.env.DB_DATABASE ? process.env.DB_DATABASE : 'sails'
    }
};
