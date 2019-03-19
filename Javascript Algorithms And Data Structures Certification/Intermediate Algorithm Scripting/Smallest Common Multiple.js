function smallestCommons(arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  let newArr = [];
  let smallestCommon = 0;
  let flag = true;

  for (let i = sortedArr[0]; i >= sortedArr[1]; i--) {
    newArr.push(i)
  }
  let i = 1;

  while (flag) {
    smallestCommon = newArr[0] * newArr[1] * i;
    for (let j = 2; j < newArr.length; j++) {
      if (smallestCommon % newArr[j] !== 0) {
        break;
      }
      if (j === newArr.length - 1) {
        flag = false;
      }
    }
    i++;
  }

  return smallestCommon;
}


smallestCommons([1, 5]);
