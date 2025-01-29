/* let fruit = "apple";

console.log("Micheal");
console.log(23);
console.log(40 + 8 + 23 - 10);

let firstName = "Micheal";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable Name Conventions
let person = "Micheal";
let PI = 3.1415;

let firstJob = "coder";
let currentJob = "teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(firstJob); */

/* let appleIsFruit = true;
console.log(appleIsFruit);
console.log(typeof appleIsFruit);
console.log(typeof "Micheal");
console.log(typeof 223);

appleIsFruit = "absolutely";
console.log(typeof appleIsFruit); // Dynamic Typing

let age;
console.log(age);
console.log(typeof age);

age = 26;
console.log(age);
console.log(typeof age);

console.log(typeof null); */

// 10.
/* let price = 120;
price = 250;

const birthYear = 1996;

console.log(birthYear);

// var category = "electronics";
// category = "clothes";

// console.log(category);
brandName = "apple";
console.log(brandName); */

// 11.
/* // Arithmetic Operators
const currentYear = 2022;
const age1 = currentYear - 1996;
const age2 = currentYear - 2005;
console.log(age1, age2);

console.log(age1 * 16);
console.log(age1 / 10);
console.log(5 ** 4);

const firstName = "John";
const surName = "Doe";
console.log(firstName + " " + surName);

// Assignmen operator
let fullName = firstName + surName;
console.log(fullName);

let counter = 0;
counter += 10;
console.log(counter);

counter *= 5;
console.log(counter);

counter /= 2;
console.log(counter);

counter++;
console.log(counter);

counter--;
counter--;
counter--;
console.log(counter);

// Comarison operators
const legalAge = age2 >= 18;
console.log(age1 > age2);

console.log(legalAge);

console.log(currentYear - 1996 > currentYear - 2005); */

// 12.
/* const currentYear = 2022;
const age1 = currentYear - 1996;
const age2 = currentYear - 2005;

console.log(currentYear - 1996 > currentYear - 2005);
// console.log(100 - 30 - 10);

let a, b;
a = b = 100 - 30 - 10;
console.log(a, b);

console.log(age1, age2);
const average = (age1 + age2) / 2;
console.log(average); */

// 13.
/* const brandName = "Toyota";
const modelName = "Corlolla";
const year = 2015;

const myCar =
  "My car is" + " " + brandName + " " + modelName + " I bought it in " + year;
console.log(myCar);

const myCar2 = `My car is ${brandName} ${modelName} I bought it in ${year}`;
console.log(myCar2);

console.log(`Hello \nHow are you? \nI'm fine`);
console.log(
  `Hello
  How are you?
  I'm fine`
);
 */

// 14.
const personAge = 8;

if (personAge >= 18) {
  console.log("John can buy alchol");
} else {
  const yearsLeft = 18 - personAge;
  console.log(
    `John is too young for drinking, he can drink in ${yearsLeft} years`
  );
}
