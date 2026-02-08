const arr =[5,1,3,2,6]

//Double -[10,2,6,4,12]
//Triple =[15,3,9,6,18]

//Binary =[ "101","1","11","10","110"]

//MAP

const double = arr.map(x => x * 2);
console.log(double);
// [10, 2, 6, 4, 12]

const triple = arr.map(x => x * 3);
console.log(triple);
// [15, 3, 9, 6, 18]


const binary = arr.map(x => x.toString(2));
console.log(binary);
// ["101", "1", "11", "10", "110"]


//FILTER
//Example: odd numbers
const odds = arr.filter(x => x % 2 !== 0);
console.log(odds);
// [5, 1, 3]

//Example: numbers > 3
const greaterThan3 = arr.filter(x => x > 3);
console.log(greaterThan3);
// [5, 6]


//REDUCE
//Sum of array
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
// 17


//Max value
const max = arr.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, arr[0]);
console.log(max);
// 6