/*

Exercise 01

*/


/*

document.onreadystatechange -> event
https://www.w3schools.com/js/js_ajax_http.asp
*/
  console.log( document.onreadystatechange);
document.onreadystatechange = function () {
  console.log( document.onreadystatechange);
}
/*
loading
interactive = when all the html loading
complete = done



/*
coamper
window.onload

*/
console.log("before onload called");
window.onload  =  function () {
  console.log("onload called");
}


// document.readystate = function () {
//   console.log( document.readystate);
// }
/**/
