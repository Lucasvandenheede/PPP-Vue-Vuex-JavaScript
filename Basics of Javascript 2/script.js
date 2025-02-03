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

/* const calculateCurrentAge = function (birthYear) {
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
console.log(leftYearsForLegalAge(2003, "John")); */

///-----/// 29. Arrays ///-----///

/* const city1 = "Istanbul";
const city2 = "Berlin";
const city3 = "London";

const cities = ["Istanbul", "Berlin", "London"]; // Literal syntax
console.log(cities);

const fruits = new Array("Apple", "Strawberry", "Lemon", "Melon");
console.log(fruits);

console.log(cities[0]);
console.log(cities[2]);
console.log(cities.length);
console.log(cities[cities.length - 1]);

cities[2] = "New York";
console.log(cities);

// cities = ["Los Angeles", "Madrid"];

const population = 20000000;
const istanbul = ["Istanbul", "Turkey", population, cities];

console.log(istanbul);
console.log(istanbul.length);

const leftYearsForLegalAge = (birthYear) => {
  const currentAge = 2025 - birthYear;
  const leftYears = 18 - currentAge;

  return leftYears;
};

const birthDates = [2045, 2046, 2047, 2048, 2049];
console.log(leftYearsForLegalAge(birthDates));

const leftYears1 = leftYearsForLegalAge(birthDates[0]);
const leftYears2 = leftYearsForLegalAge(birthDates[1]);
const leftYears3 = leftYearsForLegalAge(birthDates[birthDates.length - 1]);

console.log(leftYears1, leftYears2, leftYears3);

const leftYearsArray = [leftYears1, leftYears2, leftYears3];
console.log(leftYearsArray); */

///-----/// 30. Basic Arrays Operations ///-----///

/* const cities = ["Istanbul", "Berlin", "London"];

// Push method
const pushedLenght = cities.push("Amsterdam");
console.log(cities);
console.log(pushedLenght);

// Unshift method
cities.unshift("Lisbon");
console.log(cities);

// Pop method
cities.pop();
const removedCity = cities.pop();
console.log(cities);
console.log(removedCity);

// Shift method
cities.shift();
console.log(cities);

console.log(cities.indexOf("Berlin"));
console.log(cities.indexOf("Paris"));

// Includes method (ES6)
cities.push(100);
console.log(cities.includes("Berlin"));
console.log(cities.includes("Paris"));
console.log(cities.includes(100));

if (cities.includes("Berlin")) {
  console.log("You visited Berlin");
} */

///-----/// 31. Objects ///-----///

// const country = [
//   "Germany",
//   "Europe",
//   80000000,
//   "Berlin",
//   ["Munich", "Dortmund", "Hamburg"],
// ];

const countryObject = {
  countryName: "Germany",
  region: "Europe",
  population: 80000000,
  capitalCity: "Berlin",
  cities: ["Munich", "Dortmund", "Hamburg"],
};
