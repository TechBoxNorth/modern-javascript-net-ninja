// math object
console.log(Math.PI);

const area = 7.7;
console.log(Math.round(area)); // rounds it to closest whole number = 8
console.log(Math.floor(area)); // rounds it down to closest whole number = 7
console.log(Math.ceil(area)); // rounds it to up closest whole number = 8
console.log(Math.trunc(area)); // remove all decimals = 7

// random numbers
const random = Math.random();

console.log(random);

console.log(Math.round(random * 100)); // logs a number between 1 and 100