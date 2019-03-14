function diffArray(arr1, arr2) {
  const result1 = arr1.filter(number => !arr2.includes(number));
  const result2 = arr2.filter(number => !arr1.includes(number));

  return [...result1, ...result2];
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
