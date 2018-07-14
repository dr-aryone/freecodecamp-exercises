function fiboEvenSum(number) {
  // You can do it!
  number = ++number;
  let sum = 0;
  let current = 1;
  let prev = 0;
  let tmp = 0;

  for(let i=0; i<number; i++){
    tmp = current;
    current = current + prev;
    prev = tmp;

    if(current % 2 === 0)
      sum += current;
  }
  return sum;
}

fiboEvenSum(10);