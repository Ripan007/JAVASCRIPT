"use strict";
/* -------------------------------------------------------------------------- */
/*                               array  destructuring                          */
/* -------------------------------------------------------------------------- */
/* ---------------------------- unpacking  vaules --------------------------- */
// array destructing is   a es6 feature

// before  destructing
/* ------------------------- unpacking of the values ------------------------ */
// const arr = [1, 2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const d = arr[3];
// console.log("before destructing", a, b, c, d);

// const [e, f, g, h] = arr;
// console.log("after destructing", e, f, g, h);

/* ---------------- lets do some task with restaurant object ---------------- */

// const [first, second] = restaurant.mainMenu;
// console.log(first, second);

// if we want to skip any item

// const [first, , third] = restaurant.mainMenu;
// console.log(first, third);

// switching variables without destructing

// let [first, , third] = restaurant.mainMenu;
// console.log(first, third);

// const temp = first;
// first = third;
// third = temp;
// ? now using destruting
// it looks much more easier

// [first, third] = [third, first];
// console.log(first, third);

// receive  2return value from functions
const restaurant = {
  name: "shubh  kitchen",
  location: "kashmir,near to dal lake",
  categories: ["veg", "nonVeg", "bengali"],
  starterMenu: ["cholla", "pizza", "pasta"],
  mainMenu: ["briyani", "riceGobi", "mutton"],
  // create a method
  // preder  not to use arrow functions
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [starter, main] = restaurant.order(0, 1);
// console.log(starter, main);
// without destructing we are getting the same result , but wrapped inside  a array , with the  use   of destructing we just seperate out the variable into individual entity
// console.log(restaurant.order(0, 1));

// nested destructure
// access  those variables

const arr = [1, 2, [3, 4]];
// const [i, , j] = arr;
// console.log(i, j);
// destrucure individual element
const [i, m, [j, k]] = arr;
// console.log(i, m, j, k);

// assigning default values to the  varible
// normal way
// const [p, q, r] = [2, 3];
// console.log([p, q, r]);

// modified way

const [p = 1, q = 1, r = 4] = [2, 3];
console.log([p, q, r]);
