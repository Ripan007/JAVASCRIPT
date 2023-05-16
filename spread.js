/* -------------------------------------------------------------------------- */
/*                              spread operartor                              */
/* -------------------------------------------------------------------------- */
/* ---------------------------- expend the array into its  individual array  => spread operator  --------------------------- */
// before  spread operator
// const arr = [1, 2, 3];
// const newArr = [4, 5, arr[0], arr[1], arr[2]];
// console.log(newArr);

// spread operator
const arr = [4, 5, 6];
// take out the array and write  them individualy
const newArr = [1, 2, 3, ...arr];
// console.log(newArr);

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
};

const ingredients = [
  prompt("lets have the pasta,ingredient1"),
  prompt("ingedient2"),
  prompt("ingredient3"),
];

console.log(ingredients);
// here ingredients are passed has arguments and reieved as parameters
// first way
restaurant.orderPasta(
  "without spreadOperator",
  ingredients[0],
  ingredients[1],
  ingredients[2]
);
// second way
// this one look better , less line of code
restaurant.orderPasta("using spread operator", ...ingredients);

// restaurant.orderDelivery({
//   time: "12",
//   overwrite the same  variable name
//   site: "(lal bagh , kamla park)",
//   starterIndex: 0,
//   mainIndex: 0,
// });

// modified the existed menu using spreadOperator
// const newMenu = [...restaurant.mainMenu, "moglaiParatha"];
// console.log("newMenu", newMenu);
/* --------------------- wont modify the existed object --------------------- */
// console.log( restaurant.mainMenu);

// copy array
// const copyMenu = [...restaurant.mainMenu];
// console.log("copyMenu", copyMenu);

// join two array

// const menu = [...newMenu, ...copyMenu];
// console.log("join menu", menu);
// join the menu => starter and main

// const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log("join menu 1", menu1);

// array  ,strings , sets ,map are iterable but not objects
// objects  are   not iterable

// const str = "random";
//  seperate out  in individual letters
// console.log(...str);

// objects
// shallow coping
// const newRestaurant = {
//   yearStarted: 1990,
//   founder: "codeBuster",
//   ...restaurant,
// };
// console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "mohala dining";
console.log("copy", restaurantCopy);
console.log("original", restaurant);
