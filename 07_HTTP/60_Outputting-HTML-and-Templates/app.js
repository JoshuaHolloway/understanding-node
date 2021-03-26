const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    const message = 'Hello josh...';
    html = html.replace('{Message}', message);
    res.end(html);
    
})


const PORT = 1337;
const HOST_NAME = '127.0.0.1';
server.listen(PORT, HOST_NAME);