//Comparision operators
//They usually evaluate to a boolean answer
let number1 = 5
let number2 = 10
let number3 = 20

console.log(number1 == number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 != number2)
console.log(number1 != number1)

//logical operators are used to evaluate two or more conditions and they also give a boolean answer
// Logical AND (&&)- it evaluates to true if and only if all the conditions/statements are true
console.log((number1 < number2) && (number2 > number1) && (number3 > number2))

//logical OR (||)- it evaluates to true if only one of the conditions is true
console.log((number1 > number2) || (number2 > number1))

//logical NOT (!)- it is used to negate a condition/statement
console.log(!(number1 < number2))