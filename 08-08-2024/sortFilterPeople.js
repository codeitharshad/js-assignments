// Write a function named sortAndFilter that takes an array of objects with properties name and age, and returns a new array of objects sorted by age and filtered to include only those over 18. Example input: [{ name: 'Alice', age: 22 }, { name: 'Bob', age: 17 }], output: [{ name: 'Alice', age: 22 }].


function sortAndFilter(peoples){

    const filteredPeople = peoples.filter(function(people){
        return people.age > 18;
    });

    const sortedPeople = filteredPeople.sort(function(a,b){
        return a.age - b.age;
    });

    return sortedPeople;
    
}

const peoples = [
  { name: "Harshad", age: 24 },
  { name: "Raj", age: 17 },
  { name: "Ram", age: 27 },
  { name: "Shyam", age: 13 },
];

console.log(sortAndFilter(peoples));