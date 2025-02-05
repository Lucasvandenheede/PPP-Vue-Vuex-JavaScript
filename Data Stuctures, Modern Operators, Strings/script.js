'use strict';

const company = {
  name: 'Tropic Tech',
  location: 'Istanbul, Turkey',
  categories: ['Home Appliances', 'Computers', 'Televisions', 'Electronics'],
  recentProducts: ['Fridge', 'Laptop', 'Earpad', 'Monitor'],
  popularProducts: ['Keyboard', 'Mouse', 'Dishwasher'],
  numberOfEmployees: {
    development: {
      active: 50,
      onVacation: 4,
    },
    humanResources: {
      active: 25,
      onVacation: 26,
    },
    finance: {
      active: 35,
      onVacation: 30,
    },
  },
  getProducts: function (recentIndex, popularIndex) {
    return [
      this.recentProducts[recentIndex],
      this.popularProducts[popularIndex],
    ];
  },
  buyProducts: function ({
    price = '50',
    quantity = '1',
    recentIndex,
    popularIndex,
  }) {
    console.log(price, quantity, recentIndex, popularIndex);
  },
};

//-----// Array Destructuring //-----//

/* // const testArray = [1, 2, 3];
// const firstElement = testArray[0];
// const secondElement = testArray[1];
// const thirdElement = testArray[2];

// const [_firstElement, _secondElement, _thirdElement] = testArray;
// console.log(_firstElement, _secondElement, _thirdElement);
// console.log(testArray);

let [mainCategory, , subCategory] = company.categories;
console.log(mainCategory, subCategory);

// const temp = mainCategory;
// mainCategory = subCategory;
// subCategory = temp;

[mainCategory, subCategory] = [subCategory, mainCategory];
console.log(mainCategory, subCategory);

const [recent, popular] = company.getProducts(1, 2);
console.log(recent, popular);

const nestedArray = [1, 2, [3, 4]];
// const [x, , y] = nestedArray;
let [x, , [y, z]] = nestedArray;
console.log(x, y, z);

[x = 0, y = 0, z = 0] = [1];
console.log(x, y, z); */

//-----// Object Destructuring //-----//

/* const { name, categories, numberOfEmployees } = company;
console.log(name, categories, numberOfEmployees);

const {
  name: companyName,
  numberOfEmployees: employees,
  categories: saleFields,
} = company;
console.log(companyName, employees, saleFields);

const { boardOfManagement = [], recentProducts: newProducts = [] } = company;
console.log(boardOfManagement, newProducts);

let var1 = 10;
let var2 = 20;
const testObject = {
  var1: 50,
  var2: 80,
  var3: 100,
};

({ var1, var2 } = testObject);
console.log(var1, var2);

const {
  development: { active: activeEmployees, onVacation: onVacationEmployees },
} = numberOfEmployees;
console.log(activeEmployees, onVacationEmployees);

company.buyProducts({
  recentIndex: 1,
  popularIndex: 2,
}); */

//-----// Spread Operator //-----//

/* const letters = ['d', 'e', 'f'];
const spreadArray = ['a', 'b', 'c', ...letters];
console.log(spreadArray);

const newPopularProducts = [...company.popularProducts, 'Printer'];
console.log(newPopularProducts);

const allProducts = [...company.recentProducts, ...company.popularProducts];
console.log(allProducts);

const testString = 'test';
const spreadString = [...testString];
console.log(spreadString); */

//-----// Rest Operator //-----//

/* const spreadArray = ['a', 'b', ...['c', 'd']];
const [firstLetter, secondLetter, ...restLetters] = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];
console.log(firstLetter, secondLetter, restLetters);

const [product1, product2, ...restProducts] = [
  ...company.recentProducts,
  ...company.popularProducts,
];
console.log(product1, product2, restProducts); */

//-----// Short Circuiting //-----//

// OR
console.log(25 || 'operator50');
console.log(undefined || 50);
console.log(true || '');
console.log(null || 0);
console.log('' || null || 'rocky' || undefined);

company.totalSales = 1000;
const totalSales = company.totalSales ? company.totalSales : 0;
console.log(totalSales);

const totalSalesShort = company.totalSales || 0;
console.log(totalSalesShort);

// NULLISH
company.totalSales = 0;
const totalSalesNullish = company.totalSales ?? 25;
console.log(totalSalesNullish);

// AND
console.log(undefined && 50);
console.log('string' && 50);
console.log('string' && 50 && true && 0 && true);
