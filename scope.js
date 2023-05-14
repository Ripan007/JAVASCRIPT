/* -------------------------------------------------------------------------- */
/*                             SCOPING                        */
/* -------------------------------------------------------------------------- */
"use strict";
// var name = "raju";
function calAge(birthyear) {
  //   var name = "raju";
  const age = 2023 - birthyear;
  //   console.log(firstName);
  function printAge() {
    let output = `${firstName}, you are ${age}, born in  ${birthyear}`;
    console.log(output);
    if (birthyear >= 1981 && birthyear <= 1996) {
      //   var name = "raju";
      // ? creating   new  variable with same name , as outer scope variable
      const firstName = "raju";
      const str = `you are millineal , ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }

      // console.log(add(2, 2)); functinal are  block scope => scrict mode applied
    }
    // ? reassigning outer scope variable
    //output = "newoutput"; // reassign  the value  of output
    //console.log(output);
    // console.log(add(2, 3)); // functions are block  scope when strict mode is applied
    // console.log(str); // we can access block elements inside  a block only => let and  const are block scope
    //  console.log(name); // functional scope =>  we can access if its  in  the  function  scope
  }
  printAge();
  return age;
}

// calAge(1995);

const firstName = "mohit"; // able to access beccause of global scope
calAge(1995);
//console.log(age); // could not able to access outside of its scope (block scope)
// printAge(); // could not able to access
// const print = calAge(1995);
// console.log(print);
