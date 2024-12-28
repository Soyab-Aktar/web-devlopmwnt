//* OBJECT
const actor = {
  name: "Soyab",
  age: 20,
  phone: "91222222",
  money: 2000,
};
// const name = actor.name;
// const age = actor.age;
// const money = actor.money;
//! if right side is an object left side will be destructing will be object as well
const { phone, money } = actor;
console.log(actor.name);
console.log(actor.name);
console.log(actor.money);

//*ARRAY
const number = [45, 76];
const [first, second] = number;
const [x, y] = [23, 54];
