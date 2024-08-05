function inserDashBetweenEvenNumbers(num){
    const stringNumber = num.toString();
    let result = "";

    for(let i=0; i<stringNumber.length; i++){
        result += stringNumber[i];

        if(i < stringNumber.length - 1){

            const currentDigit = parseInt(stringNumber[i]);
            const nextDigit = parseInt(stringNumber[i+1]);

            if(currentDigit % 2 == 0 && nextDigit % 2 == 0){
                result += "-"
            }
        }
    }
    return result;
}


console.log(inserDashBetweenEvenNumbers(124569345678890))