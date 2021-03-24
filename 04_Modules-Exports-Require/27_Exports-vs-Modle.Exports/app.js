var greet = require('./greet');
greet();

var greet2 = require('./greet2_mutate');
greet2.greet();

// Take away:
//  -Can only use exports if you 
//   mutate the object.

// Just use module.exports!!!