/*

Working with Objects

Your car from Exercise 1 should have atleast 4 properties, at least one of
which is a method. Use it to answer the prompts below.

*/


/*

Redeclare your car here. It can either by by typing it out again or by
copying and pasting it here. Make sure you're assigning your car object to a
variable and that it meets the conditions above of having at least 4
properties, one of which is a method

*/
var car = {
  carMake: "Toyota",
  carModel: "Carolla",
  carYear: "1983",
  carColor: "tan",
  carGears: {
    p: "park",
    d: "drive",
    r: "reverse"
  }
  //letsMove: function gears
};



/*

Get one of the properties from your object using dot notation

*/
console.log(car.carMake);



/*

Get one of the properties from your object using bracket notation

*/
console.log(car['carModel']);

/*

Set one of the values of one of your properties using either dot notation or
bracket notation

*/
car.carYear = 1980;
/*

Call your car's method

*/
console.log(car);
