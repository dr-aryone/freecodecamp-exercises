function binaryAgent(str) {
  let arr = str.split(" ");

  for(let i=0; i<arr.length; i++) {
    arr[i] = parseInt(arr[i], 2);
    arr[i] = String.fromCharCode(arr[i]);
  }

  return arr.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");