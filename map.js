const numbers = [2, 3, 5, 6, 8];

// const square = numbers.map(function (element, index, array) {
//     console.log(element, index, array);
// })

// const square = numbers.map(function (x) {
//     return x * x;
// })
// console.log(square);
const square = numbers.map(x => x * x);
console.log(square);
const bigNumber = numbers.filter(x => x > 3);
console.log(bigNumber);
const findNumber = numbers.find(x => x > 3);
console.log(findNumber);