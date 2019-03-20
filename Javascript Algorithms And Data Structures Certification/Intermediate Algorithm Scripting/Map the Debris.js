const GM = 398600.4418;
const earthRadius = 6367.4447;

const orbitalP = alt => {
  const OR = earthRadius + alt;
  const OP = 2 * Math.PI * (Math.pow((Math.pow(OR, 3) / GM), 0.5));
  return Math.round(OP);
}

function orbitalPeriod(arr) {
  const finalArr = [];

  arr.forEach(obj => {
    const orbitalPeriod = orbitalP(obj.avgAlt);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbitalPeriod;
    finalArr.push(obj);
  });


  return finalArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
