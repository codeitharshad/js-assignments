// Write a function named personInfo that takes an object representing a person with properties name and age, and returns a string in the format: "Name: [name], Age: [age]"

function personInfo(person){
    if(typeof person === "object" && person !== null){
        return `Name: ${person.name}, Age: ${person.age}`;
    }else{
        throw new Error("Invalid Input");
    }
}

const person = {
    name: "Harshad", 
    age: 24
};

try {
  console.log(personInfo(person));
} catch (err) {
  console.log(err.message);
}