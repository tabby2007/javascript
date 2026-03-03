//Functions with parameters
//parameters are values that get passes as arguments when we invoke a function
//They help to create functions that can be reusable throughout a program


function greeting(name){
    console.log("Hello ",name," How have you been?")
}
greeting("Peace")
greeting("Tabby")

console.log("=======================")

//Below is a function with parameters to calculate the sum of two numbers
function addition(number1,number2){
    sum = number1 + number2
    console.log("The sum of the numbers is", sum)
}
addition(20,5)
//Below is a function that accepts parameters , calculate the area of a triangle whose base is 20cm and height is 12cm
function area(base,height){
    answer=0.5*base,height
    console.log("The area of the triangle is",answer)
}
area(20,12)