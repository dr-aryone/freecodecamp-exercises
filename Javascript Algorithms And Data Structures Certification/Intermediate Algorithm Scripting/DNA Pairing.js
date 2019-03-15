function pairElement(str) {
  const map = {
    G: "C",
    C: "G",
    A: "T",
    T: "A"
  }
  const result = [];

  for(let letter of str) {
    result.push([letter, map[letter]]);
  }

  return result;
}

pairElement("GCG");
