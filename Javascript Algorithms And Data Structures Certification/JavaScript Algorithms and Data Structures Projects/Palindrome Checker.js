function palindrome(str) {
  // Good luck!
  const cleanStr = str.replace(/[^a-zA-Z0-9]+/gi, "").toLowerCase();

  return cleanStr === cleanStr.split("").reverse().join("");
}

palindrome("My age is 0, 0 si ega ym.")
