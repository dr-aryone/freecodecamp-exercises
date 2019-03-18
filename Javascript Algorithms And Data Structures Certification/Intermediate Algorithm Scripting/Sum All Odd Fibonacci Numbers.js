function sumFibs(num) {
  if (num <= 0) return null;

  const oddArr = [1, 1];
  let prevValue = 1;
  let currentValue = 2;
  let temp = 0;

  while (true) {
    temp = currentValue;
    currentValue = prevValue + currentValue;
    prevValue = temp;

    if (currentValue <= num && currentValue % 2 === 1) {
      oddArr.push(currentValue);
    }
    if(currentValue > num) {
      break;
    }
  }

  return oddArr.reduce((accum, current) => accum + current);
}

sumFibs(10);
