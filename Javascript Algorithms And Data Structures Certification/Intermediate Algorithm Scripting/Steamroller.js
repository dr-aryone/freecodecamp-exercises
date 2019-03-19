function steamrollArray(arr) {
  // I'm a steamroller, baby
  const newArr = [];

  const flatten = arr => {
    for (let item of arr) {
      if (!Array.isArray(item)) {
        newArr.push(item);
      } else {
        flatten(item);
      }
    }
  }
  flatten(arr);

  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
