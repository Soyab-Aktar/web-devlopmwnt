const user = {id:34,name:'EVO'};
// * JSON = JavaScript Object Notation

//^ Stringify = Value to String
const stringified = JSON.stringify(user)
// console.log(user);
// console.log(stringified);

const product = {
    name:'Lenovo LQ',
    price:60000,
    gpu:true,
    usedFor:'Gaming',
    features:['16gb ram','512gb ssd','120watt gpu','RTX 4070']
};
console.log(product);
const productJSON = JSON.stringify(product);
console.log(productJSON);
//^ Parse = String to Value
const productPrase = JSON.parse(productJSON);
console.log(productPrase);