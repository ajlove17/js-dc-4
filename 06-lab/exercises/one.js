// function one() {
//   console.log('one');
// }
// //one();
//
// module.exports = one;
//
//
// module.exports.two = function () {
//   console.log('two');
// }


/* one class per file */

module.exports = function Person( name, height) {
 this.name = name;
 this.height = height;

}
