function myReplace(str, before, after) {
  let arr = str.split(" ");
  
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === before){
      if(isCap(arr[i][0]))
        arr[i] = after.slice(0, 1).toUpperCase() + after.slice(1);
      else
        arr[i] = after;
    }
  }

  return arr.join(" ");
}

function isCap(letter){
  if(letter.toUpperCase() === letter) return true;
  return false;
}

// myReplace("Let us go to the store", "store", "mall")
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")