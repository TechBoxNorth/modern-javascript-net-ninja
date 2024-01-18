/*

// query selector
const para = document.querySelector('div.error');
console.log(para);

const paras = document.querySelectorAll('p');
console.log(paras);



// get an element ny ID
const title = document.getElementById('page-title');
console.log(title);


// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors);


// get elements by their tag name
const paras = document.getElementsByTagName('p');
console.log(paras);

*/

// adding and changing page content
// const para = document.querySelector('p');
// para.innerText = 'Hello Javascript';

const paras = document.querySelectorAll('p');
paras.forEach(para => {
    para.innerText = 'Snigel';
    para.innerText += ' Björne';
});

const content = document.querySelector('.content');
//content.innerHTML += '<h1>BÖRJE BÖRJAR BLI BÖJLIG!</h1>'
const people = ['mario', 'luigi', 'toad'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});