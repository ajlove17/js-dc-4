var data = {
  todos: [
    'Learn HTML',
    'Learn CSS',
    'Learn jQuery'
  ],
  todosList: [
    {'item': 'Learn HTML', 'complete': false, 'active': true},
    {'item': 'Learn CSS', 'complete': false, 'active': true},
    {'item': 'Learn jQuery', 'complete': false, 'active': true}
  ]
}

function setup() {
  renderView()

  document.getElementById('form').addEventListener('submit', addTodo)
  //document.getElementById('form').addEventListener('submit', addTodoList);
}

function renderView() {
  var app = document.getElementById('app')
  var templateSource = document.getElementById('to-do-template')
  var template = Handlebars.compile( templateSource.innerHTML )
  var renderedTemplate = template( data )
  app.innerHTML = renderedTemplate
}

function addTodo( e ) {
  e.preventDefault()
  var todoInput = e.target.querySelector('input')

  var newTodo = todoInput.value
  data.todos.push( newTodo )
  todoInput.value = ''

  renderView()
}

function addTodoList(e){}

// function Car ( model, make, year, color ) {
//
//   this.model = model
//   this.make = make
//   this.year = year
//   this.color = color
//   this.engineStart = false
//
//   this.turnOn = function() {
//     return this.engineStart = true
//   }
//
//   this.turnOff = function() {
//     return this.engineStart = false
//   }
//
//   this.drive = {
//     forward: function() { console.log( 'drive forward' )},
//     left: function() { console.log( 'drive left' )},
//     right: function() { console.log( 'drive right' )},
//     reverse: function() { console.log( 'drive reverse' )}
//   }
//
// }





window.onload = setup
