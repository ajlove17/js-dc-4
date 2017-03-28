/*

Exercise 3
The event object

*/



/*

Get an array of all the buttons on the screen. Write an event handler that just `console.log`s "you clicked a button" when called. Loop over your array of buttons and attach our event handler to each button

*/
var buttons = document.querySelectorAll('.js-button');

// for (var i =0; i < buttons.length; i++){
//   buttons[i].addEventListener('click', function(){
//     console.log('button');
//   });
// }


/*

Refactor your event handler so that it `console.log`s the event object. Poke around the event object

*/
// for (var i =0; i < buttons.length; i++){
//   buttons[i].addEventListener('click', function(event){
//     console.log(event.target);//Q; outerHTML
//   });
// }

// for (var i =0; i < buttons.length; i++){
//   buttons[i].addEventListener('click', function(){
//     console.log(this);
//   });
// }


/*

Refactor your event handler so that it `console.log`s the target subobject

*/

// there is a bug
var counterIndex = 0;
var counter = document.querySelector('h1');

counter.innerText = "conter: " + counterIndex;

for (var i =0; i < buttons.length; i++){
  buttons[i].addEventListener('click', function(event){
    var increment = event.target.dataset.increment;
    counterIndex += parseInt (increment, 10) //10 is the base value we incrament
    counter.innerText = "counter: " + counterIndex;

  });
}
// dataset will always return a string

// you can use inheritance
// var parrent = document.querySelector('.content');
// parrent.addEventListener('click', function(e){
//   console.log(e.target.tagName);
//   if (e.target.tagName === "BUTTON"){
//     var increment = event.target.dataset.incrementer
//     counterIndex += parseInt (increment, 10) //10 is the base value we incrament
//     counter.innerText = "counter: " + counterIndex;
//   }
//
// });

/*

Student activity:
Do one more refactor of the event handler. Your event handler should:

1. get the increment/decrement value from the event target
2. turn that value into a number
3. add the increment/decrement value to the current value of counterIndex and update the page

Hint: any data that we define in our html with data-* will be in our elements dataset property

*/
