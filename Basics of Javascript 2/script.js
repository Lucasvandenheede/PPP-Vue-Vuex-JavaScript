///-----/// 23. Strict Mode ///-----///
/* "use strict";

let isAvailable = true;
let inMeeting = true;

if (inMeeting) isAvailable = false;
if (isAvailable) console.log("Person is available");
else console.log("Person is in meeting");

// const public = "Canada";
// const private = "room 15";
// const switch = "open"; */

///-----/// 24. Functions ///-----///

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

///-----/// 25. Declerations and Expressions ///-----///

/* 
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
console.log("Expression: ", age2); */

///-----/// 26. Arrow Functions ///-----///

/* const calculateAge3 = (birthYear) => 2025 - birthYear;
const age3 = calculateAge3(1996);
console.log(age3);

const leftYearsForLegalAge = (birthYear, name) => {
  const currentAge = 2025 - birthYear;
  const leftYears = 18 - currentAge;

  return `${name} will be 18 in ${leftYears} years`;
};

const leftYears = leftYearsForLegalAge(2020, "Micheal");
const leftYears2 = leftYearsForLegalAge(2023, "John");
console.log(leftYears);
console.log(leftYears2); */

///-----/// 27. Functions in functions ///-----///

/* function addition(number1, number2) {
  return number1 + number2;
}

function calculator(number1, number2) {
  console.log(number1, number2);
  // const addition = number1 + number2;
  const additionResult = addition(number1, number2);
  const resultText = `${number1} + ${number2} = ${additionResult}`; // 10 + 20 = 30

  return resultText;
}

console.log(calculator(5, 6)); */

///-----/// 28. Recap of functions ///-----///

const calculateCurrentAge = function (birthYear) {
  return 2025 - birthYear;
};

const leftYearsForLegalAge = function (birthYear, name) {
  const currentAge = calculateCurrentAge(birthYear);
  const leftYears = 18 - currentAge;

  if (leftYears > 0) {
    console.log(`${name} will be 18 in ${leftYears} years`);
    return leftYears;
  } else {
    console.log(`${name} is already legal.`);
    return -1;
  }

  // return `${name} will be 18 in ${leftYears} years`;
};

console.log(leftYearsForLegalAge(2045, "Micheal"));
console.log(leftYearsForLegalAge(2003, "John"));
