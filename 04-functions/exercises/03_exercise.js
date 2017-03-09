/*

Write a function called average that calculates and returns the
average of two numbers passed in as parameters. Save your return value
to a variable and `console.log` it!

*/

function averageFunction(num1, num2) {
  return ( (num1+num2) /2);
}

var average = averageFunction(8, 4);
console.log(average);


/*

Write a function that calculates and returns the distance between two
points. Your function should take two arrays as paramaters and return
the distance between the two points. Save your return value to a
variable and `console.log` it!


 1. subtract x2 from x1 to get deltaX
 2. subtract y2 from y1 to get deltaY
 3. square both deltaX and deltaY
 4. add the square of deltaX to the square of deltaY
 5. take the square root of the sum of step 4
*/
// function distanceFunction(point1x, point1y, point2x, point2y){
//   return Math.sqrt(Math.pow((point1x-point1y), 2)  + Math.pow((point2x-point2y), 2));
// }
//var distance = distanceFunction(0,0,3,7);

function distanceFunction(point1, point2){
  return Math.sqrt(Math.pow( (point1[0] - point2[0]) , 2)  + Math.pow( (point1[1] - point2[1]) , 2));
}
var distance = distanceFunction([0,0] , [3,7]);
console.log(distance);
