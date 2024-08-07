// Write a function named daysBetweenDates that takes two
//  date strings in the format "YYYY-MM-DD" and returns the
//  number of days between the two dates. Example input: 
// "2024-01-01" and "2024-01-31", output: 30.

function daysBetweenDates(date1, date2){
    
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    const difference = d1.getTime() - d2.getTime();
    
    const daydifference = difference / (1000 * 60 * 60 * 24);

    if(daydifference < 0 ){36
        return daydifference * -1;
    }else{
        return daydifference;
    }
}


let date1 = "07-08-2024";
let date2 = "03-06-2003";
let difference = daysBetweenDates(date1, date2);
console.log(difference);