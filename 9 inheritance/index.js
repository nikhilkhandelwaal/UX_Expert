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

class teacher extends User {
    constructor(subject) {
        super(name, email, age);
        this.subject = subject;
    }
}

class student extends User {
    constructor(branch) {
        super(name, email, age);
        this.branch = branch;

    }
}

class employee extends User {
    constructor(account) {
        super(name, email, age);
        this.account = account;

    }
}

/*
Bank Account
    Name, accountNumber, balance, isAccountActive
    deposit, withdraw, getBalance, closeAccount, getAccountStatus, applyAnnualIntrest


*/