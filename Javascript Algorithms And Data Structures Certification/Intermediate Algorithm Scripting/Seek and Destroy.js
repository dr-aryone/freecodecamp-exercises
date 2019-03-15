function destroyer(arr, ...rest) {
  const newArr = [];
  let flag = true;

  arr.forEach(number1 => {
    rest.forEach(number2 => {
      if(number1 === number2) {
        flag = false;
      }
    })
    if(flag) {
      newArr.push(number1)
    }
    flag = true;
  })

  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
