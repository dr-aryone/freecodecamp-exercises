function uniteUnique() {
  let arr = Array.from(arguments);
  console.log(arr);
  let output = [];

  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr[i].length; j++) {
      if(output.indexOf(arr[i][j]) < 0) 
        output.push(arr[i][j])
    }
  }

  return output;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);