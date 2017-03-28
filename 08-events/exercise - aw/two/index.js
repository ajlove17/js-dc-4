/*

Exercise Two
*/


/*

Two basic event handlers
Discuss Together
*/
var content = document.querySelector (".content");
// content.onclick = function() {
//   console.log("called");
// }


//https://www.w3schools.com/jsref/met_document_addeventlistener.asp
var button = document.querySelector (".content");
// button.addEventListener('click', function(){
//    console.log("called");
// })
// console.log(botton);

button.addEventListener( 'click', function( event ){
   console.log(event);
   //console.log( event.target );
   //target gives code
})
// event is a paramiter that is apassing the event object

/*

Writing event handlers
Do Independently, then review together

1. Get the h1 element from the page and save it to a variable called myCounter
2. Declare a variable called counterIndex and set it equal to 0
3. When the page has loaded, set the text of our header to the current value of our counter variable, so the final html is: "<h1>Counter: 0</h1>"
4. Add an event listener to the button on the page so that when it is clicked, the value of counterIndex is incremented by 1 and the new value is added to the page

*/

var myCounter = document.getElementsByTagName("h1")[0]
var counterIndex = 0;
var button = document.querySelector('.js-button');

window.onload = function (){
    myCounter.innerText = "Counter: " + counterIndex;
};

button.addEventListener( 'click', function(){
  counterIndex++;
  myCounter.innerText = "Counter: " + counterIndex;
})
