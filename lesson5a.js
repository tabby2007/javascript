//Arrow functions
//This is a function that was introduced in the ECMA Scipt and they give us the latest modern way of defining functions in compact manner
//At times, the arrow functions can be said to be anonymous functions WHY? This is beacuse they use the names of the variables they are contained in


const sayHello = () => {
    console.log("This is an arrow function.")
}
sayHello();

//create an arrow function that is able to find the product of three numbers
const product = () => {
    let num1 = 3
    let num2 = 5
    let num3 = 4
    answer = num1*num2*num3
    console.log("This is the product:",answer)
}
product();