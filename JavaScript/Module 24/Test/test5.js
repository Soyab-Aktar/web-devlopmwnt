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
