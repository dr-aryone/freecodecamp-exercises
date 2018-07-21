function selectionSort(array) {
  // change code below this line
  let length = array.length;
  let sortedArr = [];
  let min = 0;
  
  while(sortedArr.length !== length) {
    min = Math.min(...array);
    sortedArr.push(min);
    array.splice(array.indexOf(min), 1);
  }

  return sortedArr;
}
selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]