function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let count = 0;

  for (let object of collection) {
    for (let key in source) {
      if (object[key] === source[key]) {
        count++
      }
    }
    if (count === Object.keys(source).length) {
      arr.push(object)
    }
    count = 0;
  }
  // Only change code above this line
  return arr;
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
