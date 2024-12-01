function discount(quantity) {
  if (quantity <= 100) {
    const Total = quantity * 100;
    return Total;
  } else if (quantity <= 200) {
    const Total = quantity * 80;
    return Total;
  } else {
    const Total = quantity * 60;
    return Total;
  }
}

console.log(discount(40));
