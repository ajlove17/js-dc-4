/*

You can pull in data from another file using JavaScripts `require()` method,
which you pass a path as a string to the file you wish to incldue. For instance,
you could require a json file like this:

var myJSON = require('./path/to/file.json')

Given the above, import `data.json` and save it to a variable.

Once json data is imported, it can be treated like a regular JavaScript object.
How cool is that?

Write a loop that will print out our JSON data as a string, in the following format:

Quick-E-Mart's Current Stock
Item, Color, Price
Aubergine, Purple, 1.59
Apple, Red, 0.78
Nuts, Brown, 2.23

*/


//var myJSON = require('../exercises/data.json');
var myJSON = require('./data.json');

console.log(myJSON["Store Name"], "'s Current Stock");

//orig.... console.log("Item, Color, Price");
var foodsKeys = Object.keys( myJSON.Foods[0]);
console.log( foodsKeys.join(", ")  );

 for (f=0; f< myJSON.Foods.length; f++){
  //  var foodItem = myJSON.Foods[f];
  //  console.log(foodItem.name  + ", " + foodItem.color + ", " + foodItem.price);

 console.log(myJSON.Foods[f].name  + ", " + myJSON.Foods[f].color + ", $" + myJSON.Foods[f].price);
}
/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys*/
