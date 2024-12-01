const mobile = [
  { name: "Samsung", price: 10000 },
  { name: "Realme", price: 11000 },
  { name: "Xiaomi", price: 16000 },
  { name: "Oppo", price: 120000 },
  { name: "Vivo", price: 15000 },
];

function getMin(mobile)
{
    let min=mobile[0];
    for(const num of mobile)
    {
        if(mobile.price<min.price)
        {
            min=mobile;
        }
    }

    return min;
}

console.log("Min Price is : ",getMin(mobile));