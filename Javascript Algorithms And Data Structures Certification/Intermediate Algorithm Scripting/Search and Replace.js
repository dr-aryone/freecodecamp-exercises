function myReplace(str, before, after) {
  const isUpperCase = (word) => {
    return word[0] === word[0].toUpperCase() ? true : false;
  }

  if(isUpperCase(before)) {
    after = after[0].toUpperCase() + after.slice(1);
  }  

  return str.replace(before, after)
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
