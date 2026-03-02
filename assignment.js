distance = 1700
if (distance>=0 && distance<=100){
    console.log("5 USD")
}
else if(distance>=101 && distance<=500){
    console.log("10 USD")
}
else if(distance>=501 && distance<=1000){
    console.log("20 USD")
}
else if(distance>1000){
    console.log("40 USD")
}
else{
    console.log("Ivalid distance")
}