function add(num1, num2) {
  const total = num1 + num2;
  return total;
}
function substract(num1, num2) {
  const total = num1 - num2;
  return total;
}
function multiply(num1, num2) {
  const total = num1 * num2;
  return total;
}
function divide(num1, num2) {
  const total = num1 / num2;
  return total;
}

function calculate(num1, num2, operation) {
  if (operation == "add") {
    return add(num1, num2);
  } else if (operation == "substract") {
    return substract(num1, num2);
  } else if (operation == "multiply") {
    return multiply(num1, num2);
  } else if (operation == "divide") {
    return divide(num1, num2);
  } else {
    return "Please enter valid prompt .";
  }
}

console.log(calculate(5,10,'add'));
console.log(calculate(5,10,'substract'));
console.log(calculate(5,10,'multiply'));
console.log(calculate(5,10,'divide'));
console.log(calculate(5,10,'xyz'));
