function checkCashRegister(price, cash, cid) {
  let sortedCid = cid.reverse();
  let originalChange = parseFloat((cash - price).toFixed(2));
  let change = originalChange;
  let changeCid = [];
  const insufficient = { status: "INSUFFICIENT_FUNDS", change: [] };

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

  let sum = parseFloat(sortedCid.reduce((accumulator, current) => accumulator + current[1], 0).toFixed(2));

  console.log("change is", typeof change, change)
  console.log("Sum is", typeof sum, sum)

  // if change is more than sum of cid
  if (change > sum) {
    return insufficient;
  }

  // or can't return exact change.

  // if change is less than sum of cid then subract money and works good. return sorted from highest.
  sortedCid.forEach(array => {
    let unit = array[0];
    let remainder = array[1];
    let moneySpent = 0;
    // keep subtracting changes to its unit until change is less than its unit or remainder is 0
    while (change >= currency[unit] && remainder >= currency[unit]) {
      change = (change - currency[unit]).toFixed(2);
      moneySpent += currency[unit];
      remainder = (remainder - currency[unit]).toFixed(2);
      console.log("change in while", change)
      console.log("remainder in while", remainder)
      array[1] = remainder;

      if (change < currency[unit] || remainder < currency[unit]) {
        let usedChange = [unit, parseFloat(moneySpent.toFixed(2))]
        changeCid.push(usedChange)
      }
    }
  })

  cid = sortedCid.reverse();
  console.log("sum", sum)
  console.log("change", change)
  console.log("cid", cid)
  console.log("change cid", changeCid)
  // Here is your change, ma'am.

  if (change > 0) {
    return insufficient;
  }

  // if change is equal to the sum of cid. status is closed. and all cid is 0
  if (originalChange == sum) {
    const obj = cid.reduce((p, c) => {
      p[c[0]] = c[1];
      return p;
    }, {})
    let finalArr = [];

    for(let arr of changeCid) {
      let name = arr[0];
      obj[name] = arr[1];
    }

    const keys = Object.keys(obj);

    for(let key of keys) {
      finalArr.push([key, obj[key]]);
    }

    console.log("finalArr", finalArr)

    return {
      status: "CLOSED", change: finalArr
    }
  }

  return {
    status: "OPEN",
    change: changeCid
  }
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], 

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
//  {status: "OPEN", change: [["QUARTER", 0.5]]}
