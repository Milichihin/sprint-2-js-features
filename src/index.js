import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>SPRINT 2. Features ES 2015 - 2019</h1>
<div>
Practical tasks. Features ES 2015 - 2019.
</div>
`;

// ================================================================
// The function filterByN receives an array of integers,
// a number and a parameter (greater, less).
// Print a new array, where all elements will be greater/less than this number
// By default, the number is 0, the parameter is greater.

// const filterNums = (arrOfNum, startingPoint = 0, comparison = "greater") => {
//   const newNums = arrOfNum.filter((num) => {
//     return comparison === "less" ? num < startingPoint : num > startingPoint;
//   });
//   return console.log(newNums);
// };

// filterNums([-1, 2, 4, 0, 55, -12, 3], 11, "greater"); //[ 55]
// filterNums([-2, 2, 3, 0, 43, -13, 6], 6, "less"); // [-2, 2, 3, 0, -13]
// filterNums([-2, 2, 3, 0, 43, -13, 6], -33, "less"); //  []
// filterNums([-2, 2, 3, 0, 43, -13, 6]); // [2, 3, 43, 6]
// filterNums([-2, 2, 3, 0, 43, -13, 6], 23); // [43]

//====================================================================
// The function takes any number of strings and returns the sum of their lengths.

// const sumOfLen = (...strings) => {
//   return strings.reduce((previous, current) => {
//     return previous + current;
//   }, []).length;
// };

// console.log(sumOfLen("hello", "hi")); //7
// console.log(sumOfLen("hi")); //2
// console.log(sumOfLen()); //0
// console.log(sumOfLen("hello", "hi", "my name", "is")); //16

//====================================================================

// The user enters as arguments the number of seconds, minutes, hours, days, weeks, months, years.
// Output how many seconds are in all this.
// All parameters are optional. Consider 30 days in a month

const howMuchSec = (...input) => {
  let arrOfSeconds = [];
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      arrOfSeconds.push(input[i]); // seconds
    } else if (i === 1) {
      arrOfSeconds.push(input[i] * 60); // minute
    } else if (i === 2) {
      arrOfSeconds.push(input[i] * 3600); // hour
    } else if (i === 3) {
      arrOfSeconds.push(input[i] * 86400); // day
    } else if (i === 4) {
      arrOfSeconds.push(input[i] * 604800); // week
    } else if (i === 5) {
      arrOfSeconds.push(input[i] * 18144000); // month
    } else if (i === 6) {
      arrOfSeconds.push(input[i] * 217728000); // year
    }
  }

  const sumOfSeconds = arrOfSeconds.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return console.log(sumOfSeconds);
};

howMuchSec(12, 3); //192
howMuchSec(1, 33, 22); //81181
howMuchSec(); //0
