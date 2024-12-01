const product = [
  { name: "Bread", price: 30 },
  { name: "Jam", price: 60 },
  { name: "Suger", price: 40 },
  { name: "Tea", price: 50 },
  { name: "Milk", price: 90 },
];

function totalPrice(product)
{
    let sum=0;
    for(const num of product)
    {
        sum+=num.price;
    }

    return sum;
}

console.log("Total Cost : ",totalPrice(product));