// object literals
let user = {
    name: 'Anders',
    age: 52,
    email: 'anders.stenhammar@gmail.com',
    location: 'Hallsberg',
    login: function(){
        console.log('The user logged in');
    }
};

console.log(user);
user.login();