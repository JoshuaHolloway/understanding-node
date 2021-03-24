var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

// ------------------------------------

var greet3 = require('./greet3');
var greet3b = require('./greet3');

greet3.greeting = 'Changed hello world!';

greet3.greet();
greet3b.greet();

// ------------------------------------

var Greet4 = require('./greet4');

var grtr1 = new Greet4();
var grtr2 = new Greet4();
grtr1.greeting = '(grtr) Changed hello world!';

grtr1.greet();
grtr2.greet();

// ------------------------------------

var greet5 = require('./greet5_revealing-module-pattern').greet;
greet5();