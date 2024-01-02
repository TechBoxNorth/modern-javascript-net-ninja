// strings
const firstName = "Anders";
const lastName = "Stenhammar";
const email = "anders.stenhammar@gmail.com";

// string concatenation
let fullName = firstName + "" + lastName;
console.log(fullName);

fullName = `${firstName} ${lastName}`;
console.log(fullName);

// getting characters from a string
console.log(`First letter of full name is: ${fullName[0]}`);

// string length
console.log(fullName.length);

// string methods needs the opening and closing paranthesis string.Method()
console.log(fullName.toUpperCase());

let result = fullName.toLocaleLowerCase();
console.log(result);

let index = email.indexOf("@");
console.log(index);

// common string methods
result = email.lastIndexOf("a");
console.log(result);

// string.slice(where to start slicing, where to stop slicing) args are inclusive
result = email.slice(0, 10);
console.log(result);

// string.substring(where to start, how many to include)
result = email.substring(1, 8);
console.log(result);

// string.replace('what to replace', 'what to put in')
result = email.replace("anders", "torgny");
console.log(result);
