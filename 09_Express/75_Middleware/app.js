const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// -Can leave off the optional route first arg
//  and the middleware will run on all routes
app.use(
  '/JOSH-PATH', // This is path hit by link tag 
  express.static(__dirname + '/public')
);

// http://expressjs.com/en/api.html#app.use
// http://expressjs.com/en/api.html#express.static

app.use(
  '/',
  function (req, res, next) {
    console.log('Request Url:' + req.url);
    next();
  }
);

app.get('/', function(req, res) {
	res.send('<html><head><link href=JOSH-PATH/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/person/:id', function(req, res) {
	res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port, () => console.log(`http://localhost:${port}`));