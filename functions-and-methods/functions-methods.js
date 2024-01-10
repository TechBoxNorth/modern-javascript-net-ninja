// function declaration
function greet() {
  console.log("Hello!");
}

// function expression, this will not be "hoisted" to the top and need to exist berfore it is used.
addNumbers = function (a, b) {
  return a + b;
};

result = addNumbers(25, 35);
console.log(result);

// arrow function
subtractNumbers = (a, b) => a - b;
sum = subtractNumbers(50, 40);
console.log(sum);

salute = () => "Hello, World!";
let sal = salute();
console.log(sal);

let products = [10, 15, 55, 32, 54, 108, 99];
const tax = 0.25;
const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

let cost = bill(products, tax);
console.log(cost);
