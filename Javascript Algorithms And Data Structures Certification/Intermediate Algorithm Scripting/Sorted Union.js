function uniteUnique(...rest) {
  return rest.reduce((accumulator, arr) =>
    accumulator.concat(arr.filter(number =>
      accumulator.indexOf(number) === -1
    ))
    , [])
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
