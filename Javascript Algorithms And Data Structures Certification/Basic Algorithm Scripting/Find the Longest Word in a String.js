function findLongestWordLength(str) {
  let arrayOfWords = str.split(' ');
  let longestLength = arrayOfWords[0].length;

  for(let word of arrayOfWords) {
    if(longestLength < word.length) {
      longestLength = word.length;
    }
  }
  return longestLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
