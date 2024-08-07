
function daysBetweenDates(date1, date2){
    
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    const difference = d1.getTime() - d2.getTime();
    
    const daydifference = difference / (1000 * 60 * 60 * 24);

    if(daydifference < 0 ){
        return daydifference * -1;
    }else{
        return daydifference;
    }
}


let date1 = "07-08-2024";
let date2 = "03-06-2003";
let difference = daysBetweenDates(date1, date2);
console.log(difference);