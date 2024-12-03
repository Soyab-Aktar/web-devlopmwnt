function calculateTax(income, expenses) {

  if (0 > income || expenses > income) {
    return "Invalid Input";
  }

  const costDifference = income - expenses;
  const tax = costDifference * 0.2;

  return tax;
}
