/* -------------------------------------------------------------------------- */
/*                   arrow functions vs   regular functions                   */
/* -------------------------------------------------------------------------- */
"use strict";

// var firstName = "shera";
const mohit = {
  firstName: "mohit",
  year: 1995,
  calAge: function () {
    // console.log(this);
    // console.log(2023 - this.year);
    /* ----------------------------- shows undefined ---------------------------- */
    // const isMellineal = function () {
    //   console.log(this.year >= 1990 && this.year <= 1994);
    // };
    // isMellineal();

    /* --------- the result shows true ,because it points to the parent --------- */
    const isMellineal = () => {
      console.log(this.year >= 1990 && this.year <= 1999);
    };
    isMellineal();
  },
  // arrow functions  points to window
  // arrow functions  doesnot get its  this keyword , instead get the  this  keyword of its  surrounding  , parent
  greet: () => {
    // console.log(this);
    console.log(`hi its ${this.firstName}`);
  },
};

// mohit.greet();
mohit.calAge();

// console.log(this.firstName, "lets try");

// ? we should have to prefer to use brower console , vscode terminal somecase wont show  the  result properly  in terminal
// ?  always prefer to use normal functions when use as method ,other  wise we can face  this type of problem

// arrow  wont able to acces all the arguents  passed

const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};

// addExp(2, 3, 5, 6);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 3, 4, 5);
