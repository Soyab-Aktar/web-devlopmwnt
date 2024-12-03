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
