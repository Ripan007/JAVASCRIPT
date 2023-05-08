// ? destructing arrays  //

// const restaurant = {
//   items: ["chickenBriynani", "jerarice", "pullao"],
//   starterMenu: ["noodles", "rice"],
//   mainMenu: ["dalRice", "butter"],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// let [first, second] = restaurant.items;
// console.log(first, second);

// ? skip a items

// const [first, , last] = restaurant.items;
// console.log(first, last);

//  ?  swip items

// [first, second] = [second, first];
// console.log(first, second);

//  ? rccieve to return value from index
// const [starter, main] = restaurant.order(1, 1);
// console.log(starter, main);

// need to clear  this concept in javascript

// ? nested destructing

// const arr = [1, 2, [3, 4]];

// const [i, j] = arr;
// console.log(i, j);

// const [i, , [j, k]] = arr;
// console.log(i, j, k);

// ?default values

// const [a, b, c = 1] = [2, 4];
// console.log(a, b, c);

// coding is all about exprementation , exploring  new  things

/* -------------------------------------------------------------------------- */
/*                           destructing objects                          */
/* -------------------------------------------------------------------------- */
// destructing is  a life saver in case of api call , we have to avoid more line of code
// const restaurant = {
//   name: "kitchenMala",
//   location: "random ghat",
//   categories: ["italian ", "chinese", "japanease"],
//   starterMenu: ["pasta", "soup"],
//   mainMenu: ["rice", "chicken"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 23,
//     },
//     fri: {
//       open: 23,
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 1,
//     time = "33:44",
//     address,
//   }) {
//     console.log(
//       `order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`
//     );
//   },
// };
// restaurant.orderDelivery({
//   time: "22:13",
//   address: "chouki mahal",
//   starterIndex: 0,
//   mainIndex: 0,
// });

// restaurant.orderDelivery({
//   starterIndex: 1,
//   address: "mega kitchen",
// });
// const { name, location, openingHours } = restaurant;
// console.log(name, location, openingHours);
/* -------------------------------- renaming varoables  ------------------------------- */
// dealing  with   third party data
// const {
//   name: restaurantName,
//   location: local,
//   openingHours: Hours,
// } = restaurant;
// console.log(restaurantName, local, Hours);

/* ----------------------------   default value --------------------------- */
// const { menu = [], name: kitchenName = [] } = restaurant;
// console.log(menu, kitchenName);

// always be   curious  , about coding
// patient , consistency => awesome   developer
/* --------------- mutating varibles  -------------- */
// let a = 23;
// let b = 24;
// const obj = { a: 1, b: 2, c: 3 };
// ({ a, b } = obj);
// console.log(a, b);

// const { thu } = restaurant.openingHours;
// const {
//   thu: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(open, close);
// console.log(o, c);

/* -------------------------------------------------------------------------- */
/*                               spreadoperator;                              */
/* -------------------------------------------------------------------------- */
const restaurant = {
  name: "kitchenMala",
  location: "random ghat",
  categories: ["italian ", "chinese", "japanease"],
  starterMenu: ["pasta", "soup"],
  mainMenu: ["rice", "chicken"],
  openingHours: {
    thu: {
      open: 12,
      close: 23,
    },
    fri: {
      open: 23,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is  your pasta with ingredient : ${ing1} ,${ing2},${ing3}`
    );
  },
};

/* ------------------------ here is the  real example ----------------------- */
// const ingredients = [
//   prompt("let make pasta : ingredient one"),
//   prompt("ingredient two"),
//   prompt("ingredient three"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);
// restaurant.orderPasta(...ingredients);

// const newMenu = [...restaurant.mainMenu, "riceSambar"];
// console.log(newMenu);

/* ---------------------------- join two array --------------------------- */

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

/* ----------- iterabels : arrays, string ,sets , maps not object ----------- */

// const str = "ripan";
// console.log(...str);
/* -------------------------------------------------------------------------- */
/*                       // ? objects are  not iterable                       */
/* -------------------------------------------------------------------------- */

// const newRestaurant = { ...restaurant, founder: "ripan " };
// console.log(newRestaurant);
/* ----------------------------- shallow copying ---------------------------- */
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "my megakitchen";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
