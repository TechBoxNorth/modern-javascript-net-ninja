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
