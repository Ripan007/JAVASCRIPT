"use strict";

/* -------------------------------------------------------------------------- */
/*                                  functions                                 */
/* -------------------------------------------------------------------------- */
// allow write dry code
// maintainable code

// function foodProcessor(apple, oranges) {
//   console.log(apple, oranges);
//   const juice = `the juice  contain ${apple} apple and ${oranges} oranges`;
//   return juice;
// }

// foodProcessor(5, 3);

// const applejuice = foodProcessor(3, 5);
// console.log(applejuice);
// console.log(foodProcessor(5, 5));

// const appleOraneJuice = foodProcessor(10, 3);
// console.log(appleOraneJuice);

// function declaration

// function calAge(birthYear) {
//   return 2023 - birthYear;
// }

// const calAge1 = calAge(1995);
// console.log(calAge1);

// function expression
/* ---------- hoisting is  a  issue in case of function  expression --------- */

// function calAge1(birthYear) {
//   return 2023 - birthYear;
// }

// const calAge2 = calAge1(1995);
// console.log(calAge2);

/* ----------------------------- arrow functions ---------------------------- */
// with this  keyword it behave different

// const calAge = (birthYear) => 2023 - birthYear;
// const age = calAge(1995);
// console.log(age);

// const ageUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 100 - age;
// return retirement;
//   return `${firstName} was retire at the  age of ${retirement}`;
// };

// const age1 = ageUntilRetirement(1995, "ripan");
// console.log(age1);

// lets  start ones again

/* -------------------- functions calling other functions ------------------- */

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apple, orange) {
//   const applePieces = cutFruitPieces(apple);
//   const orangePieces = cutFruitPieces(orange);
//   const juice = `fruit with ${applePieces} applePieces and ${orangePieces} orangePieces`;
//   return juice;
// }

// const juices = fruitProcessor(1, 2);
// console.log(juices);
// const calAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const yearUntilTetirement = function (birthYear, name) {
//   const age = calAge(birthYear);
//   const retirement = 100 - age;
//   if (retirement > 0) {
//     console.log(`${name} retires at  the age  of  ${retirement}`);
//     return retirement;
//   } else {
//     console.log(`${name} already retires ⚱️`);
//     return -1;
//   }
// };

// console.log(yearUntilTetirement(1995, "ripan"));
// calculate average of  both team

/* ----------------------------- solve a problem ---------------------------- */

// const calAverage = (a, b, c) => a + b + c;
// const scoreDolhins = calAverage(44, 23, 71);
// const scoreKoalas = calAverage(65, 54, 49);
// console.log(scoreDolhins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`dolphins wins 🏆(${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`koalas wins (${avgKoalas}  vs ${avgDolphins})`);
//   } else {
//     console.log("no one wins 🥹");
//   }
// };

// checkWinner(scoreDolhins, scoreKoalas);
// checkWinner(511, 100);

/* --------------------------------- revise -------------------------------- */
