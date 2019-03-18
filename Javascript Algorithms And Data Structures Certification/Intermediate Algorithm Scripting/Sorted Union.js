function uniteUnique(...rest) {
  const finalArr = [];

  rest.forEach(subArr => {
    subArr.forEach(number => {
      if(finalArr.indexOf(number) < 0)
        finalArr.push(number)
    })
  })
  
  return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
