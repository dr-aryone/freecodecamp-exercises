function destroyer(arr, ...rest) {
  return arr.filter(value => !rest.includes(value));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
