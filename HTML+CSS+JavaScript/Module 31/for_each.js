const numbers = [4, 5, 2, 8, 10];

// function doubleIt(num) {
//   return num * 2;
// }
//? new Way
const doubleIt = num => num*2;

// const result = numbers.map(doubleIt)
const result = numbers.forEach(num => num*2);
console.log(result);
