// Two parameter
const diff = (a,b) => a-b;
console.log("Diff- ",diff(10,5));

// Multiple Parameter
const mul = (a,b,c,d) => a*b*c*d;
console.log("mul- ",mul(4,5,2,5));

// Single Parameter using Object
const getAge = (person) => person.age;
const student = {name:'Soyab',age:20};
const age = getAge(student);
console.log(age);

//Single Parameter using Array
const getthird = number =>number[0];
const third = getthird([1,2,3,4,5]);
console.log(third);

//No Parameter
const getPI = () =>Math.PI;
console.log(getPI());

//Large Arrow function

const doMath=(a,b,c)=> {
    const sum = a+b+c;
    const sub = a-b-c;
    const result =sum - sub;
    return result;
}