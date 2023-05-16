// const info = {
//   firstName: "ripan ",
//   lastName: "mondal",
//   age: 28,
//   birthYear: 1995,
//   role: "developer",
//   friends: ["a", "b", "c"],
//   driverLicense: true,
//   calAge: function () {
//     // console.log(this);
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is  a ${this.calAge()} old ${
//       this.role
//     } and he has  ${this.driverLicense ? "a" : "no"} driverLicense`;
//   },
// };

// console.log(info.getSummary());
// console.log(info.lasttName);
// console.log(info["firstName"]);

// breacket notation
// bracket notatation useful

// const nameKey = "Name";
// console.log(info["first" + nameKey]);
// console.log(info["last" + nameKey]);

/* -------------------------------------------------------------------------- */
/*                    primitive vs object vs referance type                   */
/* -------------------------------------------------------------------------- */
let age = 23;
const oldAge = age;
age = 50;
// console.log("age", age);
// console.log("oldAge", oldAge);

// referane type
/* --------- primitive => primitive type objects => referance  type --------- */
const me = {
  name: "random",
  age: 23,
};

const friend = me;
friend.age = 34;
console.log("friend", friend);
console.log("me", me);

const rani = {
  firstName: "rani",
  lastName: "mohan",
  age: 23,
  family: ["raji", "joti"],
};

// assign  work=> shallow copy => copy only first level
// deep copy => copy up to any level
// aasign => create a new object
//  ? to achive  deep copy we have to use external library =>  one of them  is lodash
const raniCopy = Object.assign({}, rani);
raniCopy.lastName = "agarwal";
raniCopy.family.push("mohan");
console.log("before marriage ", rani);
console.log("after marriage", raniCopy);
