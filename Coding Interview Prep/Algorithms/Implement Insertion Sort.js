function insertionSort(array) {
  // change code below this line

  for(let i=0; i<array.length; i++) {
    for(var j=0; j<i; j++) {
      if(array[i] < array[j]) {
        let tmp = array.splice(i ,1);
        array.splice(j, 0, tmp[0]);
      }
    }
  }

  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]