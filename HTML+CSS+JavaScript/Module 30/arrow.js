function add(a,b){
    const result = a+b;
    return result;
}

function add2(a,b){
    return a+b;
}

const add3 = (a,b) =>a+b;
const add4 = (a,b,c,d,e,f) =>a+b+c+d+e+f;


const sum = add3(4,6);
console.log(sum);
const sum2 = add4(4,6,4,6,4,6);
console.log(sum2);