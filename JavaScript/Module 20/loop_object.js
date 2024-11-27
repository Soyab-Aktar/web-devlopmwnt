const mobile = {
  brand: "Realme",
  model: "Narzo 60",
  price: 15000,
};

//for of : array
//for in : object

for(const prop in mobile)
{
    console.log(prop);
    console.log(mobile[prop]);
}
