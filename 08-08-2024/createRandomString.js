// Write a function named generateRandomString that takes a length and returns a random alphanumeric string of that length. Example input: 5, output: "a1b2c".

function generateRandomString(num){
    const source = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    let result = "";

    for(let i=1; i<=num; i++){
        
        const randomPlaceIndex = Math.floor(Math.random()*source.length);

        result += source[randomPlaceIndex];
    }
    return result;
}

console.log(generateRandomString(100));