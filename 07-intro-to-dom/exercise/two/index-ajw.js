/*

This homework exercise will walk you through the steps to build a table of contents for the article in index.html.

The required part of this assignment is to generate a static table of contents. The bonus, if you have time, is to make it dynamic, so that each item in the table of contents links to the corresponding paragraph of text in the article body.

Before you get started, you should familiarize yourself with the HTML document that you'll be working with

*/


/*

Get the DOM nodes for the table of contents and the article body and save them both as variables

*/
var contents = document.getElementById('table-of-contents');
var body = document.getElementById('article-body');



/*

get an array of every heading in the document and store them in a variable called documentHeadings

*/
var documentHeadings = [];
var aHeader = '';

var nodelist = (document.getElementsByTagName("h1").length) +
(document.getElementsByTagName("h2").length) + (document.getElementsByTagName("h3").length) + (document.getElementsByTagName("h4").length) +
(document.getElementsByTagName("h5").length) +
(document.getElementsByTagName("h6").length);
console.log(nodelist);


// aHeader = document.querySelector("h1").innerText;
// console.log(aHeader);

for(h=1; h <= nodelist; h++){
  if (h === 1 ){
     aHeader = document.querySelector("h1").innerText;
  } else {
    //while next .heading is a
    var aHeader = document.querySelector(aHeader).nextElementSibling//.innerText;
  }
  documentHeadings.push(aHeader);
  console.log(documentHeadings);
}

// for (h1=1, h1<= document.getElementsByTagName("h2").length, h1++){
//   var aH1 = document.getElementsByTagName("h1");
//   documentHeadings.push( aH1);
//    if ()
// }

/*

To generate our table of contents we need to do a couple of things:

1. We need to loop through our documentHeadings array
2. Inside our loop, we need to clone the curent element from the documentHeadings array and append it to the table of contents element

*/



/*

Bonus, make each item of the ToC a link to that heading on the page.

*/

/*

1. Modify each heading on the page so that it has a unique id (or figure out a way to make this part of your loop in part 2! Bonus bonus!)

*/



/*

While looping through each item in your documentHeadings array:
1. create an <a> element
2. give it an href attribute that is the same as the ID of the current documentHeading
3. then append it to the table of contents element

hint: you want what you insert to look something like this:

<a href="#firstHeading"><h1>Lorem ipsum dolor sit amet</h1></a>

*/
