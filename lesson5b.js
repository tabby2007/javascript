//Arrow functions with parameters
const greet = (name) => {
    console.log("Hello " + name + " How have you been? I trust that you are good")
}
greet("Tabby");

//example 2
console.log("========================")
//Below is a function to find the area of a circle
const circleArea = (pi,radius) =>{
    let area = pi*radius*radius
    console.log("The area of the circle:"+ area + "cm\u00B2")
}
circleArea(3.142,7)
circleArea(3.142,28)

//come up with your own example of an arrow function that utilises three parameters
const simpleInterest = (p,r,t)=>{
    let interest = p*r*t/100
    console.log("The interest is:",interest)
}
simpleInterest(12000,23,2);
simpleInterest(23000,12,3);