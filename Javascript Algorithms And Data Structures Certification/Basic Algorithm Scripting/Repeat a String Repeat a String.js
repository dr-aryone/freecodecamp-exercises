function repeatStringNumTimes(str, num) {
  // repeat after me
  let output = "";
  if(num < 0) return "";

  for(let i=0; i<num; i++){
    output += str;
  }
  
  return output;
}

repeatStringNumTimes("abc", 3);