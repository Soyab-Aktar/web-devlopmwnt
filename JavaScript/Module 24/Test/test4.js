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

function calculateFinalScore(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Invalid Input";
  }
  if (
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }
  if (obj.testScore > 50 || obj.schoolGrade > 30) {
    return "Invalid Input";
  }
  let finalScore = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily) {
    finalScore += 20;
  }
  return finalScore >= 80;
}

