function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  
  let sourceKeys = Object.keys(source);

  // Only change code below this line
  for(let i=0; i<collection.length; i++) {
    let count = 0;
    for(let j=0; j<sourceKeys.length; j++) {
      if(collection[i].hasOwnProperty(sourceKeys[j]) && collection[i][sourceKeys[j]] === source[sourceKeys[j]]) count++;
    }
    if(count === sourceKeys.length) arr.push(collection[i])
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })