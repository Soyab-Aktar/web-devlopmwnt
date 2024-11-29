function leapyear(year) {
  if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}
function leapyear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  }
  return false;
}

console.log(leapyear(2052));
console.log(leapyear2(2052));
