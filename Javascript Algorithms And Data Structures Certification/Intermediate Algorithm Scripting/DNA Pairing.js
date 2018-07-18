function pairElement(str) {
  let obj = {
    "A" : "T",
    "T" : "A",
    "C" : "G",
    "G" : "C"
  }
  let output = [];

  for(let i=0; i<str.length; i++) {
    output.push([str[i], obj[str[i]]]);
  }

  return output;
}

pairElement("GCG");