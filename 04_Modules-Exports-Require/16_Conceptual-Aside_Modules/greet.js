console.log('Hello');

const greet = function() {
  console.log('Hello from function in greet.js');
};

// greet is only accessible in imported module if we export it
module.exports = greet;
