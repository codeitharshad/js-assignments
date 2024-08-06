// Write a function named arrayOperations that takes an array of numbers and returns a new array with each number doubled. Example input: [1, 2, 3], output: [2, 4, 6].

function arrayOperation(arr){
    let doubledValue = arr.map((element) => {
        if(typeof element === "number"){
            return element * 2;
        }else{
            return element;
        };
    });

    return doubledValue;
}

const arr = [1,2,3];
console.log(arrayOperation(arr));
