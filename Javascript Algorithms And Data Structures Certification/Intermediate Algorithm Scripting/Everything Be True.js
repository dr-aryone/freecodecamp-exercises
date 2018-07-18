function truthCheck(collection, pre) {
  // Is everyone being true?
  let count = 0;

  for(let i=0; i<collection.length; i++) {
    if(collection[i].hasOwnProperty(pre) && collection[i][pre])
      count++;
  }

  return count === collection.length;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");