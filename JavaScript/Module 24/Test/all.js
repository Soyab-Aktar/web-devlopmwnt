function calculateTax(income, expenses) {

    if (0 > income || expenses > income) {
      return "Invalid Input";
    }
  
    const costDifference = income - expenses;
    const tax = costDifference * 0.2;
  
    return tax;
  }

  function sendNotification(email) {
    const check = email.indexOf("@");
    if (check > 0 && check < email.length - 1) {
      const part = email.split("@");
      const username = part[0];
      const domainName = part[1];
      const notification = username + " sent you an email from " + domainName;
      return notification;
    } else {
      return "Invalid Email";
    }
  }

  function checkDigitsInName(name) {
    if (typeof name != "string") {
      return "Invalid Input";
    }
    const isDigit=/\d/.test(name);
    return isDigit;
  }

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
  
  function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber != "number") {
      return "Invalid Input";
    } else {
      let sum = 0;
      for (const num of waitingTimes) {
        sum += num;
      }
      const avg = parseInt(sum / waitingTimes.length);
      const remainPersons = serialNumber - waitingTimes.length - 1;
      const takeTime = avg * remainPersons;
  
      return parseInt(takeTime);
    }
  }
  