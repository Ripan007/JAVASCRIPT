"use strict";
// ? when we appied  'use strict' it shows undefined else it points  to  the  window
// ? function  declarations have its own this  keyword => points out  where it reside

// const calAge = function (birthyear) {
//   console.log(2023 - birthyear);
//   console.log(this);
// };

// calAge(1995);

// ? arrow functions point to the  window
// ? arrow functions wont have  its  this  function it points to the parent
// const calAgeArrow = (birthyear) => {
//   console.log(2023 - birthyear);
//   console.log(this);
// };

// calAgeArrow(1995);

const mohit = {
  year: 1995,
  calAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};

// mohit.calAge();

// borrowing

const mohan = {
  year: 1990,
};

// this is required to access mohit calAge method to mohan objects
mohan.calAge = mohit.calAge;
mohan.calAge();
