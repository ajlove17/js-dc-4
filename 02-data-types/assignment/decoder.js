/**
 * Question 1
 * Create an empty array and store it in a variable named code.
 */

 // Your code here
 var code =[];

 /**
  * Question 2
  * Add the following characters to the end of the code array:
  * 'x', 'u', 's', 'a', 'e', 'l', 'p', 'e', 'e', 'n',
  * 'i', 't', 'l', 'a', 'v', 'o', 'x', 'e', 'r',
  * 'o', 'm', 'c'
  */

// Your code here
 var code = ['x', 'u', 's', 'a', 'e', 'l', 'p', 'e', 'e', 'n', 'i', 't', 'l', 'a', 'v', 'o', 'x', 'e', 'r', 'o', 'm', 'c'];
result = code.join();
 console.log("Answer 2 = " + result);

/**
 * Question 3
 * Remove the first and last elements of the array.
 * Hint: You may need to look up a method we haven't talked about.
 */

// Your code here
/*remove 1st*/
result= code.shift();
result = code.join();
// console.log(result);

//remove last
result= code.pop();
result = code.join();
console.log("Answer 3 = " + result);

/**
 * Question 4
 * Reverse the array.
 */

// Your code here
result= code.reverse();
result = code.join();
console.log("Answer 4 = " + result);

/**
 * Question 5
 * Replace the last element in the array with an 'e'.
 * Hint: Use length
 */

// Your code here
result= code.push("e");
result = code.join();
console.log("Answer 5 = " + result);

/**
 * Question 6
 * Replace the 5th element and 14th element with space characters.
 * Hint: remember indexes start at 0!
 */

// Your code here
result= code.splice(4, 1, " ");
result= code.splice(13, 1, " ");
result = code.join();
console.log("Answer 6 = " + result);
/**
 * Question 7
 * Join the array with an empty String in between each character and log the
 * result to the console.
 */

 // Your code here
 for(c=0; c < code.length; c++) {
   result = result.replace(",", "");
};
console.log("Answer 7 Decoded = " + result);
