function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr = arr.sort((a,b)=>a-b);

  for(let i=0; i<arr.length; i++){
    if(num === arr[i]) 
      return i;
    else if(num >= arr[i] && num < arr[i+1]) 
      return ++i;
  }
  return arr.length;
}

getIndexToIns([2, 5, 10], 15)