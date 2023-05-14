"use strict";

// make some type of variable accessible / usable in the code before  they are  actually declared , 'variable lifted to the top of the  scope '
/* -------------------------------------------------------------------------- */
/*                                  HOISTING                                  */
/* -------------------------------------------------------------------------- */

/* -------------------------------- why  tdz -------------------------------- */
//  make it easier to avoid and catch error => accessing variables before declaration is  a bad practice and should have to avoid
// make const variable actually work
/* ------------------------------ why hoisting ------------------------------ */
// using funtions before it actually  declared
// var hoisting is  just  a byproduct

// variable
// console.log(name);
// console.log(role);
// console.log(age);
// var name = "mohit";
// let role = "developer";
// const age = 28;

// functions
//console.log(addDecl(2, 2)); // hoisted
// console.log(addExp(2, 2));
// console.log(addArrow(2, 2));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExp = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => {
//   return a + b;
// };

//  in this when we call var  before declaration ,  it output undefined => the console is  undefined / error
// console.log(addExp(2, 2));
// var addExp = function (a, b) {
//   return a + b;
// };

//if (!products) deleteShoppingCart();
//var products = 10; // avoid using  var  => cause bugs
//function deleteShoppingCart() {
// console.log("delete all products");
//}

var x = 12;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
