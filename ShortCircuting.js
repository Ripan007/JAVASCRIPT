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

/* ----------------- use any datatype  ,return any datatype ----------------- */
// restaurant.numguest = 20;

// ternary opearator
// const guest1 = restaurant.numguest ? restaurant.numguest : 10;
// console.log(guest1);

// shortcircuting

// const guest2 = restaurant.numguest || 10;
// console.log("shortcircuit", guest2);

// short circuting
// const print = restaurant.name && restaurant.name;
// console.log(print);

/* -------------------------------------------------------------------------- */
/*                        nullish  coalescence operator (?? )                      */
/* -------------------------------------------------------------------------- */
// restaurant.numguest = 0;

// const guest = restaurant.numguest || 10;
// console.log(guest);

// (nullish) => undefined  and null(not 0   or '')

// const guest1 = restaurant.numguest ?? 10;
// console.log(guest1);

/* -------------------------------------------------------------------------- */
/*                         logical assignment operator                        */
/* -------------------------------------------------------------------------- */
