function sumFibs(num) {
  let fibs = [0, 1]
  let sum = 1;
  let i = 2;

  while(fibs[i-1]<=num) {
      fibs[i] = fibs[i-1] + fibs[i-2];
      if(fibs[i]%2)
        sum += fibs[i];
      i++;
    }
    
  if(fibs[i-1]%2)
    return sum-fibs[i-1];
  else
    return sum;
}

sumFibs(75025);