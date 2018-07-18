function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  arr1.forEach((val) => {
    if(arr2.indexOf(val) < 0) newArr.push(val);
  });

  arr2.forEach((val) => {
    if(arr1.indexOf(val) < 0) newArr.push(val);
  });

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);