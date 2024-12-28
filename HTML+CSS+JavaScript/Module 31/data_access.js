//*Chaining
const data = [{ id: 21, name: "Soyab", address: "Natun Chandra" }];
// console.log(data[0].address);

const data2 = {
  count: 200,
  data: [
    { id: 1, name: "Soyab", nickname: "EVO" },
    { id: 2, name: "Harsid", nickname: "Denger" },
  ],
};
// console.log(data2.data[0].nickname);

const user = {
  id: 301,
  name: "Fresh",
  address: {
    first: "India",
    second: "West bengal",
    Third: "Murshidabad",
  },
  city: "Aurangabad",
};
// console.log(user.address.second);

//^Optional Chaining

const user2 = {
  id: 301,
  name: "Fresh",
  address: {
    first: "India",
    second: "West bengal",
  },
};
console.log(user2.address?.Third);
