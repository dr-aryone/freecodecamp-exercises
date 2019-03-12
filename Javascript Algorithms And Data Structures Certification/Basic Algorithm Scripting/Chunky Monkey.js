function chunkArrayInGroups(arr, size) {
  const finalArr = [];
  let start = 0;
  let end = size;

  while(start < arr.length) {
    let subArr = arr.slice(start, end);
    finalArr.push(subArr);
    start += size;
    end += size;
  }

  return finalArr;
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
