// Write a JavaScript function named calculate that takes two numbers as arguments and returns an object with their sum, difference, product, and quotient. Example output: {sum: 10, difference: 2, product: 24, quotient: 1.5}.

function calculate(num1, num2){
    if(typeof num1 == "number" && typeof num2 == "number"){
        return {
          sum: num1 + num2,
          difference: num1 - num2,
          product: num1 * num2,
          quotient: num1 / num2,
        };
    }else{
        throw new Error("Invalid Input");
    }
    
}

try{
    console.log(calculate(true,5));
}catch(err){
    console.log(err.message)
}