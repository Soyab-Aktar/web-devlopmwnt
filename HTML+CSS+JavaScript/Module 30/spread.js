const max = Math.max(2,7,8,2,5,23,12);
// console.log(max);

//!Spread operator
const number = [3,7,2,1,8,4];
const maxElement = Math.max(...number);
// console.log(maxElement);

//^ Use Spread Operator to copy
const num1 = [1,2,3,4];
const num2 = num1;
const num3 = [...num1];  //copy
num1.push(99);
console.log(num1);
console.log(num2);
console.log(num3);

//?Tip
const num4 = [...num1,55];  //copy +add
console.log(num4);