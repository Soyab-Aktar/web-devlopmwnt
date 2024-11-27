// slice
const vill = "NatunChandra";
const villPart = vill.slice(2, 5);
//2 starting index
// 5 ending index
console.log(villPart);

// spilt

const moral = "I am a Good Boy and i want to become a coder";
// console.log(moral.split(" "));
// console.log(moral.split("a"));

const namestr = "jet,neon,brim,cypher,astra,skye";
const namet = namestr.split(",");
console.log(namet);

//Join
console.log(namet.join());
console.log(namet.join("--"));
console.log(namet.join("||"));
console.log(namet.join("  "));

//Concate
const first='Soyab';
const last ='Aktar';

const fullName= first.concat(' ').concat(last);
console.log(fullName);

//Include
console.log(fullName.includes('x'));
console.log(fullName.includes('o'));
