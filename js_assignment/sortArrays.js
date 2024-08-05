function sortArray(arr){
    dataTypeOfArray = typeof arr[0];

    if(dataTypeOfArray === "string"){
        const lowerCased = arr.map((element) => element.toLowerCase());
        return lowerCased.sort();
    } else if(dataTypeOfArray === "number"){
        return arr.sort((a,b) => a - b);
    } else{
        throw new Error("The Datatype of array elements is not valid");
    }
}

const arr = [true,false];

try {
  console.log(sortArray(arr));
} catch (error) {
  console.error(error.message);
}

