function fiboEvenSum(number) {
  // You can do it!
  let length = number+1;
  let current = 1;
  let prev = 0;
  let tmp;
  let sum = 0;

  for(let i=0; i<length;i++) {
    tmp = current;
    current += prev;
    prev = tmp;
    if(current % 2 === 0) sum += current;
  }

  return sum;
}

fiboEvenSum(10);
