function smallestMult(n) {
  // Good luck!
  let isFound = false;
  let currNumber = 0;

  while(!isFound) {
    // Add itself if it's not divisible
    currNumber += n;

    for(let i=n; i>=1; i--) {
      // if currNumber is not divisible by numbers in range, break out of forloop
      if(currNumber % i !== 0) {
        break;
      }
      // currNumber is divisible by all numbers down to 1!
      if(i===1)
        isFound = true;
    }
  }

  return currNumber;
}

smallestMult(20)