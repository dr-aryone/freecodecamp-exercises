function convertToRoman(num) {
  let romans1 = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  let romans10 = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let romans100 = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let romans1000 = ["", "M", "MM", "MMM"];
  let str = num.toString();
  let romanNumber = "";
  let n = 0;

  for(let i=str.length-1; i >= 0; i--) {
      if(str.length-i === 1) {
        n = Number(str[i]);
        romanNumber = romans1[n] + romanNumber;
      }
      else if(str.length-i === 2) {
        n = Number(str[i]);
        romanNumber = romans10[n] + romanNumber;
      }
      else if(str.length-i === 3) {
        n = Number(str[i]);
        romanNumber = romans100[n] + romanNumber;
      }
      else {
        n = Number(str[i]);
        romanNumber = romans1000[n] + romanNumber;        
      }
  }
  
 return romanNumber;
}

convertToRoman(68);