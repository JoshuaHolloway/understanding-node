var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
	console.log(chunk);
  console.log('chunk length: ', chunk.length);
	writable.write(chunk);
});

// -Buffer will get filled with data from stream
// -If data is smaller than buffer then you will get all data in one chunk.
// -If data is larger than buffer then you will get data in chuncks
//  the size of the buffer.
// -When buffer is filled the 'data' event is emitted and all listerns are run.
// -And the buffer is flushed and then more data is streamed in, repeat...

// -Filestream buffer is 64kB by default.
//  --Running the code above verifies my buffer size is in fact 16kB due to the highWaterMark setting!!!
// -Note that each chunk is passed to the listener upon each flush of the buffer.

// -Listening to the 'data' event starts the stream reading