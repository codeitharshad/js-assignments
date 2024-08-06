// Write a function named filterAdults that takes an array of person objects (each with name and age properties) and returns an array with only those persons who are 18 or older.

function filterAdults(persons){
    if(!Array.isArray(persons)) {
        throw new Error("Inpur must be an Array of an objects.")
    }

    return persons.filter(person => {
        return person.age >= 18;
    });
}

const people = [
  { name: "Harshad", age: 24 },
  { name: "Ram", age: 13 },
  { name: "Raj", age: 12 },
];

console.log(filterAdults(people));