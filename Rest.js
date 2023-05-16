// const arr = [1, 2, ...[3, 4]];
// console.log(arr);
// rest , because it is of left  side
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7];
// console.log(a, b, others);
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

restaurant.orderPizza("potato", "chilli", "panner");
restaurant.orderPizza("potato");
// it will print those variable which we have  mentioned and rest of other things are kept seperated
// const [cholla, , pasta, ...other] = [
//   ...restaurant.starterMenu,
//   ...restaurant.mainMenu,
// ];
// console.log(cholla, pasta, other);

// objects

// remaining elements are collected in diff  object

// const { mon, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
// console.log(mon);

// const add = function (...numbers) {
//   //   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(3, 5, 6, 7);
// add(5, 6, 8, 0);
// const x = [1, 2, 3];
// add("(using spread operator):", ...x);
