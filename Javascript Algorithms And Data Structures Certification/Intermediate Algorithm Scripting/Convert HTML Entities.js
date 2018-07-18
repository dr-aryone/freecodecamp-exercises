function convertHTML(str) {
  // &colon;&rpar;
  let newStr = "";

  for(let i=0; i<str.length; i++) {
    newStr += getEntity(str[i]);
  }

  return newStr;
}

function getEntity(char) {
    let obj = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    '"' : "&quot;",
    "'" : "&apos;"
  }

  for(let prop in obj) {
    if(char === prop)
      return obj[prop];
  }

  return char;
}

convertHTML("Dolce & Gabbana");