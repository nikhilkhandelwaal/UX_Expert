// const arr = [10, 20, 30, 40, 50];

// const newArr = arr.map(
//     (value, index) => {
//         return value * 2;
//     }
// );

// console.log(newArr);
// console.log(arr);

// const name = ["hello", "welcome", "india"];

// const upperName = name.map(
//     (v, i) => {
//         return v.toUpperCase();
//     }
// )

// console.log(upperName);

// const arr = [10, 11, 12, 13, 14];

// const newArr = arr.filter(
//     (value, index) => {
//         return value % 2 == 0;
//     }
// );

// console.log(newArr);
// console.log(arr);

const person = [
    { name: "John", age: 25, city: "New York" },
    { name: "Alice", age: 30, city: "Paris" },
    { name: "Bob", age: 35, city: "London" },
    { name: "Emma", age: 28, city: "Berlin" },
    { name: "Mark", age: 32, city: "Rome" }
];

const names = person.map(
    (v, i) => {
        return { name: v.name, age: v.age };
    }
);
console.log(names);

// - Create a new array that contains **only the names & age of all users**.
// - Create a new array of users who are 18 years or older.
// - Get a list of only **names of active users** only.
// - Create a new array of users who have a score greater than 70, and return only their names in uppercase.
// - Get an array of users who are inactive, but increase their score by 10.
// - Create an array that adds a new property called status: Minor, adult
// - Get users who are: active, age≥25, Give me name and score only
// - Create a array users only score≥70 & add grade A if score≥85, B if score ≥75
// - Remove inactive users, passed: true if score ≥75 and false if score is ≤75


// Create a array of object of 15 employee data with name, dept, role, salary, exp, isRemote, rating
// 1. Get an array of all employee names.
// 2. Get employees who work in the IT department.
// 3. Get names of employees who are remote workers.
// 4. Get employees with more than 5 years of experience.
// 5. Get an array of objects containing name and salary only.
// 6. Get employees whose salary is greater than 65000.
// 7. Get names of employees with a rating above 4.5.
// 8. Get IT employees and return their names in uppercase.
// 9. Get employees who are not remote and increase their salary by 10%.
// 10. Add a new property senior (true if experience ≥ 6, else false) to each employee.
// 11. Get employees from IT department with rating ≥ 4.5 and return name and role only.
// 12. Get employees earning less than 70000 and add a property bonusEligible: true.
// 13. Get names of employees who are Developers and remote.
// 14. Get employees and add a property level ("Junior", "Mid", "Senior" based on experience).
// 15. Remove HR employees and return the remaining employees’ name and department.