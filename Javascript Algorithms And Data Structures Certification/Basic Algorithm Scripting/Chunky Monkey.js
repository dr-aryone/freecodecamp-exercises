function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  let length = arr.length / size;
  
  for(let i=0; i<length; i++){
    newArr.push(arr.slice(0, size));
    arr.splice(0, size);
  }

  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)