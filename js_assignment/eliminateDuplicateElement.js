function eliminateDuplicateElement(arr){

    // Creating array with unique values 
    let result = [];
    const obj = {};

    arr.forEach(element => {
        if(!result.includes(element))
        result.push(element);
    });

    // Creating object from array of unique values with the value undefined 
    result.forEach(element => {
        obj[element] = undefined;
    });     

    // Counting the frequency of each key in array and setting it as value to key
    for(key in obj){
        let count = 0;
        arr.forEach(element => {
            if(parseInt(key) === element){
                count++;
            }
        });
        obj[key] = count;
    }

    // FInding key which have highest value
    maxKey = null;
    maxValue = -1;

    for(const key in obj){

        if(obj[key] > maxValue){
            maxKey = obj[key];
        }
    }
    return maxKey
}

let arr = [1,1,1,2,2,2,1,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8]
console.log(eliminateDuplicateElement(arr))