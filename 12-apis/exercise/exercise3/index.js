/* make pokedex  with external API, locall databse, & handelbars

had form build pokemon group from pokedex
them your applcation will submit
ask for that information from the APIadd those deatial to your databse, then display

pokemon API https://pokeapi.co/*/

var express = require('express'); // set-up server side frame work
var exphtbs = require('express-handlebars'); //setup Handlebars

/*connect handlebars to express*/
app.engine('handlebars', exphtbs({defaultLayout: 'main'})) // decare the template file
app.set('view engine', 'handlebars')// set engine
/*end connect handlebars to express*/

//ToDO pull data in
//https://www.codecademy.com/courses/javascript-beginner-en-EID4t/0/1?curriculum_id=5122e6f8b2cb8a8e97000a01
// https://www.w3schools.com/xml/dom_httprequest.asp
//open(method, url, async)
var xhr = new XMLHttpRequest();
var url = "http://pokeapi.co/api/v2/pokedex/1/";

/*function callOtherDomain() {
  if(invocation) {
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send();
  }
}*/
invocation.open('GET', url, true);
invocation.onreadystatechange = handler;
invocation.send();

console.log(xhr.status);
console.log(xhr.statusText);

//set-up database

// set-up server port
app.listen(3000, function() {
  console.log('example app listening on port 3000')
})

app.get('/', function( request, response ) {
// index will load options for user to pick pokemon battle with
// use radio buttons / input
//extra: add hide show to show tho pokemon abibilties

  })

function getPokemon(){
    //funtion request  pokemon information from API
  }

function submitPokemon(){
  // save pokemon to database
}
