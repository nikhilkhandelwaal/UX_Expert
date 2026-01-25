class User {

    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    printName() {
        console.log(this.name);
    }
    printAge() {
        console.log(this.age);
    }
    greet() {
        console.log(`Hey there!, i am ${this.name}`)
    }
    changeAge(newAge) {
        this.age = newAge;
    }

}

const user1 = new User("Ankit", "ankit@gmail.com", 25);
const user2 = new User("Shubham", "shubham@gmail.com", 30);

user1.changeAge(35);

console.log(user1);


/*
Bank Account
    Name, accountNumber, balance, isAccountActive
    deposit, withdraw, getBalance, closeAccount, getAccountStatus, applyAnnualIntrest


*/