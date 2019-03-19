function dropElements(arr, func) {
  const index = arr.findIndex(func);

  if(index === -1)  return [];
  
  return arr.slice(index);
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;})
