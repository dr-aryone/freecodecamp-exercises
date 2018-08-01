function multiplesOf3and5(number) {
  // Good luck!
  let arr = [];
  let sum = 0;

  for(let i=3;i<number; i+=3) {
    arr.push(i);
  }

  for(let i=5; i<number; i+=5) {
    if(arr.indexOf(i) < 0)
      arr.push(i);
  }

  sum = arr.reduce((prev, curr) => {
    return prev+curr;
  }, sum);

  return sum;
}

multiplesOf3and5(1000);