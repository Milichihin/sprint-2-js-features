import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

//============ FILTER ================

const filterNums = (/* arguments */) => {
  //some code
  return /* answer */;
};

filterNums([-1, 2, 4, 0, 55, -12, 3], 11, "greater"); //[ 55]
// filterNums([-2, 2, 3, 0, 43, -13, 6], 6, 'less'); // [-2, 2, 3, 0, -13]
// filterNums([-2, 2, 3, 0, 43, -13, 6], -33, 'less'); //  []
// filterNums([-2, 2, 3, 0, 43, -13, 6]); // [2, 3, 43, 6]
// filterNums([-2, 2, 3, 0, 43, -13, 6], 23);  // [43]
