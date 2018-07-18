var GM = 398600.4418;
var earthRadius = 6367.4447;


function orbitalPeriod(arr) { 
  var finalArr = [];
  
  arr.forEach(function(obj){
    let OP = orbitalP(obj.avgAlt);
    delete obj.avgAlt;
    obj.orbitalPeriod = OP;
    finalArr.push(obj);
  });
  
  
  return finalArr;
}

function orbitalP(alt){
  var OR = earthRadius + alt;
  var OP = 2 * Math.PI * (Math.pow((Math.pow(OR, 3)/GM),0.5));
  return Math.round(OP);
}  