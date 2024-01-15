let people = ['mario', 'luigi', 'ryu', 'shaun', 'chin-li'];

people.forEach(person => {
    console.log(person);
});

function summ(a, b){
    return a + b;
}

function addStuff(addFunc){
    let knas = addFunc(15, 25);
    console.log(knas);
}

addStuff(summ);
