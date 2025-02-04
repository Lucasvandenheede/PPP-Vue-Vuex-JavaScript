'use strict';

const company = {
  name: 'Tropic Tech',
  location: 'Istanbul, Turkey',
  categories: ['Home Appliances', 'Computers', 'Televisions', 'Electronics'],
  recentProducts: ['Fridge', 'Laptop', 'Earpad', 'Monitor'],
  popularProducts: ['Keyboard', 'Mouse', 'Dishwasher'],
  getProducts: function (recentIndex, popularIndex) {
    return [
      this.recentProducts[recentIndex],
      this.popularProducts[popularIndex],
    ];
  },
};

//-----// Array Destructuring //-----//

// const testArray = [1, 2, 3];
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
console.log(x, y, z);
