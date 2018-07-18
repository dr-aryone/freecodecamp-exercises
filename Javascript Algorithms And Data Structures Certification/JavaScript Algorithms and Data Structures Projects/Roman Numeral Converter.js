var roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
var arabic = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

function convertToRoman(num) {
  var result = [];
    for (let i = 0; i < roman.length; i++) {
      while ((num - arabic[i]) >= 0) {
          result.push(roman[i]);
          num -= arabic[i];
      } 
  }
  return result.join("");
}