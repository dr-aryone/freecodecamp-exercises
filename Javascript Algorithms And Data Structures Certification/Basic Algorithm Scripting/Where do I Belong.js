function getIndexToIns(arr, num) {
  const sortedArr = arr.sort((a, b) => a-b);
  const { length } = sortedArr;

  if(num > sortedArr[length-1]) {
    return length;
  } else if(!length) {
    return 0;
  }

  return arr.findIndex(number => number >= num)
}

getIndexToIns([40, 60], 50);
