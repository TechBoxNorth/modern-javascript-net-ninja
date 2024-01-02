// Arrays
let ninjas = ["leonardo", "donatello", "michelangelo", "raphael"]; // zero based array

// overwrite an element of an array
//ninjas[1] = "splinter";

//console.log(ninjas);

// array methods
let result = ninjas.join(" - ");
console.log(result);

result = ninjas.indexOf("raphael");
console.log(result);

// joining arrays together by concatonation
result = ninjas.concat(["ole", "dole", "doff"]);
console.log(result);

// an element to the end of the array
ninjas.push("bengan");
console.log(ninjas);

// remove the last element of an array
ninjas.pop();
console.log(ninjas);
