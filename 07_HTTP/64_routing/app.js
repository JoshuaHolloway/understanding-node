const http = require('http');
const fs = require('fs');

// https://nodejs.org/api/http.html#http_event_request
//
// Event: 'request'
//    -request <http.IncomingMessage>
//    -response <http.ServerResponse>
//
// -Emitted each time there is a request. 
// -There may be multiple requests per connection (in the case of HTTP Keep-Alive connections).
const request_listener = function(req, res) {
  
  // https://nodejs.org/api/http.html#http_class_http_incomingmessage
  // Class: http.IncomingMessage
  //    -Extends: <stream.Readable>
  // -An IncomingMessage object is created by http.Server or http.ClientRequest and 
  //  passed as the first argument to the 'request' and 'response' event respectively.
  // -It may be used to access response status, headers and data.
  // -Different from its socket value which is a subclass of <stream.Duplex>, 
  //  the IncomingMessage itself extends <stream.Readable> and is created 
  //  separately to parse and emit the incoming HTTP headers and payload, 
  //  as the underlying socket may be reused multiple times in case of keep-alive.
  //
  // https://nodejs.org/api/http.html#http_class_http_serverresponse
  // Class: http.ServerResponse
  //     -Extends: <Stream>
  // -This object is created internally by an HTTP server, not by the user. 
  // -It is passed as the second parameter to the 'request' event.  
  
  if (req.url === '/') {
    fs.createReadStream(__dirname + '/index.htm')
      .pipe(res);
  }
  else if (req.url === '/api') {
    
    // https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers
    //
    //  response.writeHead(statusCode[, statusMessage][, headers])    
    //    -statusCode <number>
    //    -statusMessage <string>
    //    -headers <Object> | <Array>
    //    -Returns: <http.ServerResponse>
    //
    //  -Sends a response header to the request.
    //  -The last argument, headers, are the response headers.
    //  -Returns a reference to the ServerResponse, so that calls can be chained.
    const STATUS_CODE = 200;
    const RESPONSE_HEADERS = { 'Content-Type': 'application/json' };
    const obj = {
      firstname: 'John',
      lastname: 'Doe'
    };
    res.writeHead(STATUS_CODE, );
    res.end(JSON.stringify(obj));
  }
  else {
    const STATUS_CODE = 404;
    res.writeHead(STATUS_CODE);
    res.end();
  }
  
};

// https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener
//
// http.createServer([options][, requestListener])
//    -options <Object>
//      IncomingMessage <http.IncomingMessage> Specifies the IncomingMessage class to be used. Useful for extending the original IncomingMessage. Default: IncomingMessage.
//      ServerResponse <http.ServerResponse> Specifies the ServerResponse class to be used. Useful for extending the original ServerResponse. Default: ServerResponse.
//      insecureHTTPParser <boolean> Use an insecure HTTP parser that accepts invalid HTTP headers when true. Using the insecure parser should be avoided. See --insecure-http-parser for more information. Default: false
//      maxHeaderSize <number> Optionally overrides the value of --max-http-header-size for requests received by this server, i.e. the maximum length of request headers in bytes. Default: 16384 (16KB).
//    -requestListener <Function>
//    -Returns: <http.Server>
// The requestListener is a function which is automatically added to the 'request' event.
const server = http.createServer(request_listener);

// Starts the HTTP server listening for connections
const HOST_NAME = '127.0.0.1';
const PORT = 1337;
server.listen(PORT, HOST_NAME);