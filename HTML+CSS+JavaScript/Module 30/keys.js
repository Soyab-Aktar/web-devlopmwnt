const glass = { name: "Glass",
                color: "Golden",
                price: 23,
                isCleaned: true };

console.log(glass);

//!  KEYS
const keys = Object.keys(glass);
// console.log(keys);

//!  ENTRYS
const entries = Object.entries(glass);
// console.log(entries);

//!  VALUES
const values = Object.values(glass);
// console.log(values);

//!  DELETE
delete glass.isCleaned;
console.log(glass);

//!  FREEZE
Object.freeze(glass);
glass.type = 'Pure';
console.log(glass);
