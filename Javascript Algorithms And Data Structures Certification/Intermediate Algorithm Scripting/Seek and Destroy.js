function destroyer() {
  // Remove all the values
  const args = Array.from(arguments);
  const arr = args[0];

  for(let i=0; i<arr.length; i++){
    for(let j=1; j<args.length; j++){
      if(arr[i] === args[j]){
        arr.splice(i, 1);
        i--;
      }
    }
  }

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);