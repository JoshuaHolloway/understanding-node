var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt',  function(err, data) {
	console.log(data);
  console.log(data.toString()); // can also pass in 'utf8' as second arguement to state what the expected encoding is to decode it on the fly
});

console.log('Done!');