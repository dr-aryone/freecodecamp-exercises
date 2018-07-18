function palindrome(str) {
  // Good luck!
  str = str.replace(/[^a-z0-9]+/gi, "");

  if(str.toLowerCase() === str.split("").reverse().join("").toLowerCase())
    return true;

  return false;
}



palindrome("A man, a plan, a canal. Panama")