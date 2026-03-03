//Exporting modules
// We export modules so that we can utilize them in other files/modules in our program

export const calculator =(x,y)=>{
    let difference = x-y
    console.log("The difference between the two is",difference)
}

export const simpleInterest=(principal,rate,time)=>{
    let si = (principal*rate*time)/100
    console.log("The simple interest gained is:",si)
}