function addElement(arr, element){
    const length = arr.length;
    arr[length] = element;
    return arr;
}


let arr = [];

console.log(addElement(arr, 21));
console.log(addElement(arr, 1));
console.log(addElement(arr, 88));
