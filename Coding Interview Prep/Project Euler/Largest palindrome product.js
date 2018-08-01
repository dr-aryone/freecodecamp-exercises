function largestPalindromeProduct(digit) {
  // Good luck!
  if(digit === 2) {
    let max = 0;
    for(let i=99; i>9; i--) {
      for(let j=99; j>9; j--) {
        let number = i * j;
        let str = number.toString();
        if(str === str.split("").reverse().join("") && number > max)
          max = number;
      }
    }
    return max;
  }

  let max = 0;
    for(let i=999; i>99; i--) {
      for(let j=999; j>99; j--) {
        let number = i * j;
        let str = number.toString();
        if(str === str.split("").reverse().join("") && number > max)
          max = number;
      }
    }

  return max;
}

largestPalindromeProduct(3);