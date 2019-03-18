function convertHTML(str) {
  const map = {
    "&": "amp",
    "<": "lt",
    ">": "gt",
    '"': "quot",
    "'": "apos"
  }
  let newStr = "";

  for (let char of str) {
    if (map[char]) {
      newStr += "&" + map[char] + ";";
    } else {
      newStr += char;
    }
  }

  return newStr;
}

convertHTML("Dolce & Gabbana");
