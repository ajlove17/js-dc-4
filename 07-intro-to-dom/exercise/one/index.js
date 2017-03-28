/*

In-class Exercise 1

*/
 console.log("Hola!");

/*

Getting stuff from the DOM

*/


// Get #title
// var title = document.getElementById('title')
// or document.querySelector('title')
/*var title = document.getElementById('title')*/

// Get the text of #title
/*console.log( title ) // will print the html element
console.dir( title ) // will print the html element*/


/*var title = document.getElementsByTagName('h1');
console.log( title );*/
var me = document.getElementsByTagName('ajw');
console.log( me );

/*var firstText = document.querySelector('p');
var text = document.querySelectorAll('p');
console.log( firstText );
console.log( text ); */

// var paragraph = document.getElementById("secibd-paragraph");
// //var paragraph = document.getElementById("link"); // it works
// //var link = paragragh.getElementById("link"); //this doesn't work!
// var link = paragraph.querySelector("#link");
// console.log( link );
var title = document.getElementById('title')
console.log( title );

/* print text*/
// console.log( title.textContent ) // prints the text
// console.log( typeof title.textContent ) // string

title.textContent = "I am the DOM";


/*

Setting stuff in the DOM

*/

// Change the text of #title
// title.textContent = 'New Test Title' // replaces the current title
// title.textContent += ' test' // adds to teh curent title


// Change the styeling of an element
console.log( title.style ) // object representing the element's styling
title.style.backgroundColor = 'blue'
title.style.padding = '1em'
title.style.width = '100%'
title.style.textAlign = 'center'


/*

Creating DOM elements

*/

var link = document.createElement('a') // creates a new element (in memory)
link.href = "#" // sets the href property of the <a> element
link.id = 'myLink' // sets the ID property
link.textContent = "This is a link I made"

console.log( link ) // <a href="/" id="myLink">This is a link I made</a>
console.dir( link);
/*

Adding and removing elements from the page
via append, remove

*/

// Appending
// document.getElementById('first-paragraph').appendChild( link )
// link will be appended (added to the end) as a child (so within the p element)
var firstP = document.getElementById('first-paragraph').appendChild( link )



// Removing
// link.remove() // removes the element
// para.removeChild(link) // removes a child element

/*
https://www.w3schools.com/jsref/dom_obj_all.asp

*/
