// 23. Strict Mode
/* "use strict";

let isAvailable = true;
let inMeeting = true;

if (inMeeting) isAvailable = false;
if (isAvailable) console.log("Person is available");
else console.log("Person is in meeting");

// const public = "Canada";
// const private = "room 15";
// const switch = "open"; */

// 24. Functions
/* function welcomeText() {
  console.log("Welcome to my page!");
}

welcomeText("Hello"); // invoking, running, calling
welcomeText();
welcomeText();

function calculator(number1, number2) {
  console.log(number1, number2);
  const addition = number1 + number2;
  const resultText = `${number1} + ${number2} = ${addition}`; // 10 + 20 = 30

  return resultText;
}

const result1 = calculator(12, 24);
console.log(result1);

const result2 = calculator(100, 200);
console.log(result2); */

// 25. Declerations and Expressions

// Declerations
function calculateAge1(birthYear) {
  const currentYear = 2025;
  return currentYear - birthYear;
}

const age1 = calculateAge1(1996);
console.log("Decleration: ", age1);

// Expressions
const calculateAge2 = function (birthYear) {
  const currentYear = 2025;
  return currentYear - birthYear;
};

const age2 = calculateAge2(1996);
console.log("Expression: ", age2);
