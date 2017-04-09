var express = require('express'); // set-up server
var exphtbs = require('express-handlebars');
var data = require('./pokedex.json');

var app = express(); //create app

/*connect handlebars to express*/
app.engine('handlebars', exphtbs({defaultLayout: 'main'})) // decare the template file
app.set('view engine', 'handlebars')// set engine
/*end connect handlebars to express*/

function getPokemn (id){
  var pokemon;
  for (var p = 0; p < data.pokemon.length; p++){
    if ( data.pokemon[p].id === id){
    pokemon  =  data.pokemon[p]
    break
    }
  }
  return pokemon;

  //{{eash move as move}}
}



// set-up server port
app.listen(3000, function() {
  console.log('example app listening on port 3000')
})



/* routing for server (if statement)*/
app.get('/', function( request, response ) {
  /* test template*/
   //response.render('home', { 'title': 'gotta catch them all' ,  'pokemon': 'pikachoo' });

   /* get data */
  response.render('home', data); // render function
  //response.render('home', { 'title': 'gotta catch them all' , data})
//response.render('home', { 'title': 'gotta catch them all' , 'pokemon':  data})

  /*
  var id =  request.params.id  // gettinG back a strring
  var index = parseInt (id, 10) // tuns it into a number
  var deck = data.pokemon[index]

  // response.render('home',  deck );
*/

})

app.get('/pokemon/:id', function( request, response ) {
  var id =  request.params.id;  // gettinG back a strring
  var index = parseInt (id, 10) // tuns it into a number
  /*var deck = data.pokemon[index]

//  response.render('home',  deck );*/
var aPokemon = getPokemn (id);
response.render('pokemon',  aPokemon );
 })
