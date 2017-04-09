var express = require('express')

var bodyParser = require('body-parser')

var hbs = require('express-handlebars')

var mongoose = require('mongoose')

var Entry = require('./models/entry.js')

mongoose.connect('mongodb://localhost:27017/guestbook')

function handleSubmit(event){

  console.log(event)

}

var app = express();

app.engine('handlebars', hbs({defaultLayout: 'main'}))

app.set('view engine', 'handlebars')

app.use(bodyParser.json())

app.use( bodyParser.urlencoded({

  extended: true

})) 

app.get('/', function(req, res){

  Entry.find({}, function(err, guests){

    res.render('home', {name: "Ramsay", guests: guests})

  })

})

app.post('/', function(req, res){

  var currentEntry = new Entry({

    content: req.body.content ,

    name: req.body.name

  })

  currentEntry.save()

  Entry.find({}, function(err, guests){

    res.render('home', {

      name: "Ramsay",

      guests: guests,

      handleSubmit: handleSubmit})

  })

})

app.listen( 3000, function() {

  console.log( 'Your server is running. Better go catch it.' )

})
