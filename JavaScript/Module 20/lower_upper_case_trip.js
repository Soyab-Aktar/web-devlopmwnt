const sub = "Bengali";

// Upper case
console.log(sub.toUpperCase());
//Lower Case
console.log(sub.toLowerCase());

//Trim case
const water = "Drink";
const liquid = "  Drink  ";

// ^ without trim
if (liquid == water) {
  console.log("Both same with no space .");
} else {
  console.log("Diff for spaceing .");
}

// ^ With Trim

if (liquid.trim() == water.trim()) {
  console.log("Both same with no space .");
} else {
  console.log("Diff for spaceing .");
}
