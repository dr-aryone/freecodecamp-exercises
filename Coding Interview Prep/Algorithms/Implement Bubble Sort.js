function bubbleSort(array) {
  // change code below this line
  const length = array.length-1;
  let tmp = 0;

  for(let i=0; i < length; i++) {
    let swapped = false;
    if(array[i] > array[i+1]){
      console.log("swapping " + array[i] + " " + array[i+1])
      tmp = array[i];
      array[i] = array[i+1];
      array[i+1] = tmp;
      swapped = true;
      console.log("swapped " + array[i] + " " + array[i+1])
    }

    if(swapped) i = 0;
  }

  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
bubbleSort( [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])