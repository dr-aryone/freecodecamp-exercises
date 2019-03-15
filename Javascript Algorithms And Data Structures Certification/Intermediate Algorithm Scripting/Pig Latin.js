function translatePigLatin(str) {
  const regex = /[aeiou]/;
  const index = str.split('').findIndex(letter => regex.test(letter))

  if (index > 0) {
    return str.slice(index) + str.slice(0, index) + 'ay'; // 1st index not vowel
  } else if (index === 0) {
    return str + 'way'; // 1st index vowel
  }
  return str + 'ay'; // all consonants
}

translatePigLatin("qwty")
