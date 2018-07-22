function quickSort(array) {
  // change code below this line
  if(array.length <= 1)
    return array;
  
    let arrayLength = array.length;
    let pivotPosition = Math.floor(arrayLength / 2);
    let pivotValue = array[pivotPosition];
    let less = [];
    let more = [];
    let same = [];

    for(let i=0; i<arrayLength; i++) {
      if(array[i] === pivotValue) {
        same.push(array[i]);
      }
      else if(array[i] < pivotValue) {
        less.push(array[i])
      }
      else {
        more.push(array[i])
      }
    }
  // change code above this line
  return quickSort(less).concat(same, quickSort(more));
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]