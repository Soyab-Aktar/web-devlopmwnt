const products = [
  { id: 1, name: "xiaomi phone 6", price: 12000 },
  { id: 2, name: "Samsung phone note24", price: 124000 },
  { id: 3, name: "Samsung note laptop", price: 124000 },
  { id: 4, name: "iPhone phone 17", price: 125000 },
  { id: 5, name: "Vivo foldbook laptop", price: 127000 },
  { id: 6, name: "Oppo air one Phone", price: 1542000 }
];

function matched(products,search)
{
    const match=[];
    for(const product of products)
    {
        if(product.name.toLowerCase().includes(search.toLowerCase()))
        {
            match.push(product);
        }
    }
    return match;
}

console.log(matched(products,'phone'));
