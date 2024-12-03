function checkDigitsInName(name) {
  if (typeof name != "string") {
    return "Invalid Input";
  }
  const isDigit=/\d/.test(name);
  return isDigit;
}
