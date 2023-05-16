"use strict";
/* -------------------------------------------------------------------------- */
/*                              short circuiting                              */
/* -------------------------------------------------------------------------- */
const restaurant = {
  name: "shubh  kitchen",
  site: "kashmir,near to dal lake",
  categories: ["veg", "nonVeg", "bengali"],
  starterMenu: ["cholla", "pizza", "pasta"],
  mainMenu: ["briyani", "riceGobi", "mutton"],
  openingHours: {
    // inside object there is other objects
    mon: {
      open: 12,
      close: 33,
    },
    thu: {
      open: 34,
      close: 35,
    },
    wed: {
      open: 34,
      close: 46,
    },
  },
  // create a method
  // preder  not to use arrow functions
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //   order doesn,t matter in case of objects
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex,
    site,
    time = "12:23",
  }) {
    console.log(
      `order received : ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${site} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `the delicious pasts contain ingredient are ${ing1}, ${ing2},${ing3}`
    );
  },
  orderPizza: function (mainIngrediens, ...restIngredients) {
    console.log(mainIngrediens);
    console.log(restIngredients);
  },
};

/* ----------------- use any datatype  , return any datatype ---------------- */
/* --------------- result are base  on falsy(0,'',undefined,null) and truthy value --------------- */
/* ------------------------------- OR operator ------------------------------ */
// it will execute  the  truthy value ,    if truthy value  wont  exist then it will print the last value
// restaurant.numguest = 20;
// ternary operator
// const guest1 = restaurant.numguest ? restaurant.numguest : 10;
// console.log(guest1);
// short circuiting
// const guest2 = restaurant.numguest || 10;
// console.log(guest2);

/* ------------------------------ AND operator ------------------------------ */
// in this case  every value  should be  true  , then only it will execute

// restaurant.orderPizza && restaurant.orderPizza("cheese");

/* -------------------------------------------------------------------------- */
/*                        nullish coellishing  operator                       */
/* -------------------------------------------------------------------------- */
// 0 and '' => are  not falsy value  => in case of ??

// restaurant.numguest = 0;
// here zero take as a falsy value
// const guest = restaurant.numguest || 10;
// console.log(guest);
// hero  0 take as a truthy value
// const guest2 = restaurant.numguest ?? 10;
// console.log(guest2);
