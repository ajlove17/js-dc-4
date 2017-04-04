var express = require('express'); // set-up server
var exphtbs = require('express-handlebars');
var app = express();
var data = require('./pokedex.json');

/*connect handlebars to express*/
app.engine('handlebars', exphtbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
/*end connect handlebars to express*/

// set-up server port
app.listen(3000, function() {
  console.log('example app listening on port 3000')
})




/* routing for server (if statement)*/
app.get('/', function( request, response ) {
  /* test template*/
   //response.render('home', { 'title': 'gotta catch them all' ,  'pokemon': 'pikachoo' });

   /* get data */
  response.render('home', data);
  //response.render('home', { 'title': 'gotta catch them all' , data})
//response.render('home', { 'title': 'gotta catch them all' , 'pokemon':  data})

  /*
  var id =  request.params.id  // gettinG back a strring
  var index = parseInt (id, 10) // tuns it into a number
  var deck = data.pokemon[index]

  // response.render('home',  deck );
*/

})

app.get('/:id', function( request, response ) {
  var id =  request.params.id  // gettinG back a strring
  var index = parseInt (id, 10) // tuns it into a number
  var deck = data.pokemon[index]

  // response.render('home',  deck );
 })
