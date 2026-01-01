let userName, phone, mobile, email, color;

let nameRegex = /^[a-zA-Z ]+$/;
let phoneRegex = /^[0-9]{8}$/;
let mobileRegex = /^(010|011|012|015)[0-9]{8}$/;
let emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;

while (true) {
  userName = prompt("Enter your name");
  if (nameRegex.test(userName) === false) {
    alert("Invalid Name");
  } else {
    break;
  }
}

while (true) {
  phone = prompt("Enter your phone number");
  if (phoneRegex.test(phone) === false) {
    alert("Invalid phone number");
  } else {
    break;
  }
}

while (true) {
  mobile = prompt("Enter your mobile number");
  if (mobileRegex.test(mobile) === false) {
    alert("Invalid mobile number");
  } else {
    break;
  }
}

while (true) {
  email = prompt("Enter your email");
  if (emailRegex.test(email) === false) {
    alert("Invalid Email");
  } else {
    break;
  }
}

while (true) {
  color = prompt("Enter your favorite color (red, green, blue)");
  if (color == "red" || color == "blue" || color == "green") {
    break;
  } else {
    alert("Enter valid color");
  }
}

console.log(
  "%cHello Mr. " +
    userName +
    "\nYour saved data is:\n" +
    "Phone: " +
    phone +
    "\n" +
    "Mobile: " +
    mobile +
    "\n" +
    "Email: " +
    email,

  "color: " + color
);
