/*

PIXART
A JS Painting Website

In this exercise, students will build out a simple paint application. This application will have a form where users can set a color that they would like to paint with. The user can then mouse over cells that they would like to paint with that color.

*/



/*

Step 1: Building the canvas
Our canvas is 500px by 500px and we need to fill it with cells (wich a class of .square) that are 10px by 10px.

First, add however many divs with a class of "square" as you need to to fill our the #canvas element.

If #canvas is 500 x 500, how many 10 x 10 squares can we fit in to it?

How we we create elements in JavaScript and add them to the page?

*/
var canvas = document.querySelector("#canvas") ;
/*canvas.innerHTML = "<div class='square'></div>";
canvas.innerHTML = "<div class='square'></div> <div class='square'></div>";
*/

// // AJW Code
// function buildCanvas(){
//   var canvasSQR = [];
//   var canvasWidth = 500;
//   var squareWidth = 10;
//   var canvasSquareNum = Math.pow( (canvasWidth/squareWidth), 2);
//
//   for(s=1; s<= canvasSquareNum; s++){
//   canvasSQR.push("<div class='square'></div>");
//   }
//   //console.log(canvasSQR);
//   fullCanvas = canvasSQR.join('');
//   //console.log(fullCanvas)
// return fullCanvas;
// }
//
// canvas.innerHTML = buildCanvas();



//Resutlt wiht bug!!!!!!!
for(var sq=0; sq<= 2500; sq++){
  var square = document.createElement("div");
  square.className = "square";
  // square.classList.add('square') // won't work on IE 11
  canvas.appendChild(square);
// add a call the the function paint
}

/*

Step 2: Form Event
When the user submits the form, either by hitting enter in the text input field or by clicking on the submit button, we should then get the color value that they entered and save it to a variable called currentColor.

Once we have the color, we should update our .brush element, so that the user can see what color they're painting with at any given time.

hints:
(1) you may need to look up form specific events,
(2) you may need to avoid the browser's default behavior when submitting a form,
(3) you should query for the input field from the event target
(4) once you have the input field, it's current value is stored in the value property

*/
// AJW Code
// var colorBTN = document.querySelector("#set-color");
// var colorInput = document.querySelector("#color-field");
// var currentColor = "lime";
//
// colorBTN.addEventListener('click', function(event) {
//   currentColor = colorInput.value;
//   console.log(currentColor);
//   document.querySelector(".brush").style.backgroundColor = currentColor;
// });
//
// //colorInput.addEventListener('keypress', function(event){currentColor = event; });
//
// console.log(currentColor);

// Resutlt bug!!!
var form = document.getElementByID ("form");
var brush = document.querySelector(".brush");
var currentColor = "lime";

form.addEventListener('submit', function(event) {
  event.preventDefault(); //stop the button from refreshing the page
  currentColor = document.querySelector("#color-field").value;
  //brush.setAttribute("style", "background: " + currentColor);
  brush.style.backgroundColor = currentColor;
});

/*

Step 3: Readying our Canvas
Now that we can get the color the user wants to paint with from our form, we need to make it so they can actually paint with that color. Create an event handler that will change the background color of the event target to the current color and attach it to every div.square that you created made above.

Hints:
(1) you probably want to write your function here and then attach the event in your loop up in Step 1
(2) think about what event we might want to attach our event handler too; what mouse events are there that might make sense?

*/

function paint(e) {
  e.target.style.backgroundColor = currentColor;
}

canvas.addEventListener("mouseover", function(e) {
  e.target.style.backgroundColor = currentColor;
}); // leverageing parents listening to child
