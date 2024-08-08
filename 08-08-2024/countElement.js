// Write a function named countDuplicates that takes a string and returns an object with the count of each character in the string. Example input: "hello", output: {h: 1, e: 1, l: 2, o: 1}.


function countDuplicates(str){

    let obj = {};
    
    str.split('').forEach(element => {
        obj[element] = 0;
    });

    for(let char of str){
        if(char in obj){
            obj[char]++;
        }
    }
    console.log(obj);
}

countDuplicates("harshad");