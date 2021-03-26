var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt'); // default utf-8 encoding, and highwatermark set to 64kB as default

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();
// -This stream is trasnformable.
// -Every time a chunk is sent to it the chunk is compressed.

// pipe() is a method placed on the prototype object of the Readable stream class (the prototype property of the classes constructor)
readable.pipe(writable);
// The writable stream is returned which allows us to perform chaining

// NOTE: The writable stream needs to be full duplex because it needs to be read from to apply chaining.
// 


// This is the input stream ('readable')
//------|
readable.pipe(gzip).pipe(compressed);
//-----------------|
// The resulting stream here is the transformed gzip stream

//----------------------------------|
// The result of this pipe is the written to write-stream named 'compressed'

// -In effect, the readable stream is piped to to the gzip stream,
//  and then the gzip stream is piped to the compressed stream.
// -In other words, 'readable' stream is piped into 'compressed' stream
//  through the transformed pipe named 'gzip'.
// -We read from the file into the 'readable' stream.
// -We write a compressed chunk to the gzip stream and the chunk is written to the 'compressed' stream in chunks.
// -The 'compressed' stream writes to the output .txt file.