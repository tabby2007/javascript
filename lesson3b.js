//while loop
//Below is a simple syntax of the while loop
//1. Initialization of a variable
//2.while keyword
//3.condition to be checked
//4.body of the while loop


let i =0
while(i <= 10){
    console.log("The value of i is",i)
    i++
}

console.log("=====================")

let numbers = [4,5,6,7,8]
let doubled = numbers.map(num => num * 2)
console.log(doubled)

console.log("===================")

const users = [
{ id: 1, name: 'Andrew', email: 'andrew@gmail.com' },
{ id: 2, name: 'Bob', email: 'bob@gmail.com' },
{ id: 3, name: 'Charlie', email: 'charlie@gmail.com' }
];
// Extract only the names into a simple string array
const userNames = users.map(user => user.name);
console.log(userNames);