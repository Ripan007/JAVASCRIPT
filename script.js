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
};

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

// setting a default value
// const { menu = [], name: kitchenName = [] } = restaurant;
// console.log(menu, kitchenName);

// always be   curious  , about coding
// patient , consistency => awesome   developer
