function translatePigLatin(str) {
  const vowels = /[aeiou]/i;
  
  if(vowels.test(str[0])) return str + "way";

  for(let i=0; i<str.length; i++) {
    if(vowels.test(str[i]))
      return str.slice(i) + str.slice(0, i) + "ay";
  }

  return str + "ay";
}

translatePigLatin("consonant");