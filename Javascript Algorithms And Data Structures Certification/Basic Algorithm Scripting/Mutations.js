function mutation(arr) {
  const firstWord = arr[0].toLowerCase();
  const secondWordArr = arr[1].toLowerCase().split('');

  return secondWordArr.every(letter => firstWord.includes(letter))
}

mutation(["hello", "hey"]);
