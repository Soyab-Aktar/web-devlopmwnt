function calculateFinalScore(obj) {
  if (
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    (typeof obj.isFFamily === "string" &&
      (obj.isFFamily === "farmer" || obj.isFFamily === "notFarmer"))
  ) {
    return "Invalid Input";
  } else {
    if (obj.testScore <= 50 && obj.schoolGrade <= 30 && obj.isFFamily) {
      return true;
    } else {
      return false;
    }
  }
}
