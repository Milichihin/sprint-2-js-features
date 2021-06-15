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

const howMuchSec = (...time) => {
  // const sec = seconds + minutes*60 + hours*360 + days*8640 + weeks*60480 + months*1814400 + years*21772800;

  const sec = time.reduce((previous, current, i) => {}, []);
  return console.log(sec);
};

howMuchSec(12, 3); //192
// howMuchSec(1, 33, 22); //81181
// howMuchSec(); //0
