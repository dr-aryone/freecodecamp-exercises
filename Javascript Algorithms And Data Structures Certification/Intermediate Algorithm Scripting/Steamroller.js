function steamrollArray(arr) {
  // I'm a steamroller, baby
  let i = 0;
  do {
    arr = arr.reduce((acc, val) => acc.concat(val), []);
  } while(i < arr.length)

  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);