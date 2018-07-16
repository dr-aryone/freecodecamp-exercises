function mixedNumbers(arr) {
  // change code below this line
    arr.unshift("three");
    arr.unshift(2);
    arr.unshift("I");
    
    arr.push(7);
    arr.push("VIII");
    arr.push(9);
    
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));