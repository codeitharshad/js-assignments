// Write a function named validateEmail that takes a string
//  and returns true if the string is a valid email address and
//  false otherwise, using regular expressions. Example input: 
// "test@example.com", output: true


function validateEmail(email){

    const regularExpression =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(email.match(regularExpression) !== null){
        return true;
    }else{
        return false;
    }
}


console.log(validateEmail("harshad@weoto.com"));