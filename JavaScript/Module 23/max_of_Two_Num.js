function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function getMax3(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

const max1 = getMax3(13, 72,34);
const max2 = getMax3(56, 20,74);
const max = getMax(max1, max2);
console.log(max);

const maxMath=Math.max(1,2,65,38,45,86,25,95,74,89,34,23);
console.log(maxMath);
