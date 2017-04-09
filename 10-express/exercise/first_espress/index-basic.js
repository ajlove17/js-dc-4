var express = require('express');
var app = express();

app.listen(3000, function() {
  console.log('example app listening on port 3000')
})


/* routing for server (if statement)*/
app.get('/', function( request, response ) {
  response.send('hello world')
})

app.get('/about', function( req, res ) {
  res.send('this is a about page')
})
