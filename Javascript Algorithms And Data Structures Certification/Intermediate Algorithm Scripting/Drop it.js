function dropElements(arr, func) {
  // Drop them elements.
  for(let i=0; i<arr.length; i++) {
    if(func(arr[i]))
      return arr.slice(i);
  }
  return [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });