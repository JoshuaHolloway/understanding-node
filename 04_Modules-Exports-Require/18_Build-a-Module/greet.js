console.log('Hello');

const f = function() {
  console.log('Hello from function in greet.js');
};

// greet is only accessible in imported module if we export it
module.exports = f;
console.log(module.exports);