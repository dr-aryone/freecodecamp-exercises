function whatIsInAName(collection, source) {
  // What's in a name?
  // Only change code below this line
  return collection.filter(object => {
    for(let key in source) {
      if(source[key] !== object[key])
        return false;
    }
    return true;
  })
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
