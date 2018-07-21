function pairwise(arr, arg) {
  sum = 0;

  for(let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {
      if(arr[i] + arr[j] === arg){
        sum += i + j;
        arr[i] = NaN;
        arr[j] = NaN;
      }
    }
  }

  return sum;
}

pairwise([1,4,2,3,0,5], 7);