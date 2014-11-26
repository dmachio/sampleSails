// Start sails and pass it command line arguments
console.log(process.env);
require('sails').lift(require('optimist').argv);
