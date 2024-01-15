// object literals
let user = {
    name: 'Anders',
    age: 52,
    email: 'anders.stenhammar@gmail.com',
    location: 'Hallsberg',
    things: ['bil', 'dator', 'mobil', 'surfplatta', 'strumpor'],
    // method declared with the 'function' key word
    login: function(){
        console.log('The user logged in');
    },
    // method declared without the 'function' key word
    logThings(){
        this.things.forEach(thing => {
            console.log(thing);
        });
    }
};

console.log(user);
user.login();
user.logThings();