function largestPrimeFactor(number) {
  // Good luck!
  let divisor = 2;

  while(number > 1) {
    if(number % divisor === 0) {
      number /= divisor;
    }else {
      if(divisor === 2) {
        divisor++;
      }else {
        divisor +=2;
      }
    }
  }
  return divisor;
}

largestPrimeFactor(13195);
