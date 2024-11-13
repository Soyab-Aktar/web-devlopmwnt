// break
for (let i = 0; i <= 100; i++) {
  console.log("Num: ", i);
  if (i >= 10) {
    break;
  }
}
//Continue

console.log('Continue .........');
for (let index = 0; index < 10; index++) {
  if (index % 2 === 1) {
    continue;
  }
  console.log(index);
}
