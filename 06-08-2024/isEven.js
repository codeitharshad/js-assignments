//  Write a function named isEven that takes a number as an argument and returns true if the number is even and false if the number is odd.

function isEven(num){
    if(typeof num === "number"){
        return num % 2 == 0;
    }else{
        throw new Error("Invalid Input")
    }
    
}

try {
  console.log(isEven(10));
} catch (err) {
  console.log(err.message);
}