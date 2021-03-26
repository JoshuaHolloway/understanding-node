const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
    // -Send the response one chunk at a time!  
});

server.listen(1337, '127.0.0.1');
