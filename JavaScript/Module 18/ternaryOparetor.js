const age = 20;

// if (age > 18) {
//   console.log("You can Vote .");
// } else {
//   console.log("You Cant .");
// }

age > 18 ? console.log("You can Vote .") : console.log("You Cant .");

let price = 600;
const isLeader = false;
// if (isLeader == true) {
//   price = 0;
// } else {
//   price += 100;
// }
// console.log("Price : ", price);

price = isLeader === true ? (price = 0) : (price += 100);
console.log("Price : ", price);
