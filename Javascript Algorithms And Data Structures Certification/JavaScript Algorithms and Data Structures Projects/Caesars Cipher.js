function rot13(str) { // LBH QVQ VG!
  // cap 65 - 90 // 13 // 77.5
  let finalStr = "";

  for(let char of str) {
    let code = char.charCodeAt(0);
    
    if(code >= 65 && code <= 90) {
      if(code <= 77) {
        code += 13;
      } else if(code >= 78) {
        code -= 13;
      }
    }
    finalStr += String.fromCharCode(code);
  }


  return finalStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
