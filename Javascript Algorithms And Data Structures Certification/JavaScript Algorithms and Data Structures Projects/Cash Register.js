function checkCashRegister(price, cash, cid) {
  const roundFloatNumber = num => parseFloat(num.toFixed(2));
  const reversedCid = cid.reverse();
  let changeDemanded = roundFloatNumber(cash - price);
  const currency = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100
  }
  const arrToObj = arr => {
    const obj = arr.reduce((accumulator, current) => {
      accumulator[current[0]] = current[1];
      return accumulator;
    }, {})

    return obj;
  }
  const objToArr = obj => {
    const arr = [];
    const keys = Object.keys(obj);

    for (let key of keys) {
      arr.push([key, obj[key]]);
    }
    console.log("obj to arr", arr)
    return arr;
  }
  const cidObj = arrToObj(reversedCid); // cid in obj form
  const changeObj = {};

  for (let unit in cidObj) {
    let change = 0;
    while (currency[unit] <= changeDemanded && cidObj[unit] > 0) {
      changeDemanded = roundFloatNumber(changeDemanded - currency[unit]);
      cidObj[unit] = roundFloatNumber(cidObj[unit] - currency[unit]);
      change = roundFloatNumber(change + currency[unit]);
      changeObj[unit] = change;
    }
  }

  const changeArr = objToArr(changeObj);
  const cidArr = objToArr(cidObj);
  const total = roundFloatNumber(cidArr.reduce((accumulator, current) => accumulator + current[1], 0));

  if (changeDemanded > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  }

  if (changeDemanded === 0 && total === 0) {
    for(let change of changeArr) {
      cidObj[change[0]] = change[1];
    }

    return {
      status: "CLOSED",
      change: objToArr(cidObj).reverse()
    }
  }

  if (total > 0) {
    return {
      status: "OPEN",
      change: changeArr
    }
  }
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
