const numbers = [4, 5, 2, 8, 10];

// function doubleIt(num) {
//   return num * 2;
// }
// //? new Way
// const doubleIt = num => num*2;

// const result = numbers.map(doubleIt)
const result = numbers.filter(num => num>5);
const result2 = numbers.filter(num => num>=5);
console.log(result);
console.log(result2);
