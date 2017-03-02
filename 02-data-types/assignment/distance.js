/* ****************************************************
Distance Formula
***************************************************** */

 var coordinatesX1 = 1;
 var coordinatesY1 = 3;
 var coordinatesX2 = 10;
 var coordinatesY2 = 15;

var deltaX =  coordinatesX2 - coordinatesX1
var deltaY =  coordinatesY2 - coordinatesY1

resultX = Math.pow(deltaX, 2);
resultY = Math.pow(deltaY, 2);

result = resultX + resultY;

console.log (Math.sqrt(result));
