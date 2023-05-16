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
};

restaurant.orderDelivery({
  time: "12",
  //   overwrite the same  variable name
  site: "(lal bagh , kamla park)",
  starterIndex: 0,
  mainIndex: 0,
});

// assign  default  value
// it will take the  rest of the value from above call method , and rest of the value taken from mention default value
/* ------------------------------------ usefull in case of functions  with lot of parameters  ----------------------------------- */
restaurant.orderDelivery({
  mainIndex: 0,
  site: "(lal bagh , kamla park)",
});
// extracting variables
// in object we dont  have to assign variables at a  sequence

// const { name, categories, site } = restaurant;
// console.log(name, categories, site);

// assigning a  different variable name

// const {
//   name: restaurantName,
//   categories: restaurantCategory,
//   site: siteLocation,
// } = restaurant;
// console.log(restaurantName, restaurantCategory, siteLocation);

//  assigning  default values => usefull in case of where   the  varibles dont have value
// general case
// const {name:restaurantName,main} = restaurant;
// results  => undefined

// const { name: restaurantName = [], main = [] } = restaurant;
// console.log(restaurantName, main);

/* ---------------------------- mutating varibles --------------------------- */
// let a = 10;
// let b = 20;

// let obj = { a: 1, b: 2 };
//  to mutate the  variables we have to wrap  the varible with parenthesis
// ({ a, b } = obj);
// console.log(a, b);

// nested objects

// const { mon } = restaurant.openingHours;
// further destructure
// const {
//   mon: { open, close },
// } = restaurant.openingHours;
// assign name to the variable

// const {
//   mon: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);
// console.log(open, close);
