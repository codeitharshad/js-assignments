function eliminateDuplicateElement(arr) {
  let result = [];

  arr.forEach((element) => {
    if (!result.includes(element)) result.push(element);
  });

  return result;
}

let arr = [11, 2, 3, 4, 3, 5, 6, 5, 4, 7];
console.log(eliminateDuplicateElement(arr));
