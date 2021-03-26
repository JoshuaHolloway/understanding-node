const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));
    
});

server.listen(1337, '127.0.0.1');