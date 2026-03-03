//Anonymous functions in javascript
//These are functions that exist without a name

//Below is an example of a such functions:
//The below functions shall take the name of the variable they are contained in

const greet = function(){
    console.log("Hello there, hope your Monday is fine..")
}
greet();


//Below is another anonymous function
(function(){
    console.log("Welcome to the world of programming....")
})();