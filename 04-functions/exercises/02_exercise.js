/*

Create a function called addNumbers that takes two parameters and `console.log`s the result of adding the two parameters together

Create another function called subtractNumbers that takes two
parameters and `console.log`s the result of subtracting the second
parameter from the first parameter.

Call both functions twice, passing in different numbers as arguments
each time.

*/

function addNumbers (num1, num2) {
  var addResult = num1 + num2;
  console.log ("add = " , addResult);
};
function subtractNumbers (num1, num2) {
  console.log ("subtract = " , num1 - num2);
};

addNumbers (1982,35);
subtractNumbers (2017, 1982);
