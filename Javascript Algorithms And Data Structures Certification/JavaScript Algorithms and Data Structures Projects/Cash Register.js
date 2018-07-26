function checkCashRegister(price, cash, cid) {
  let cidCopy = [];
  let returnArr = [];
  var change = cash - price;
  let length;
  let val;
  let rcid = 0; //remaining change in drawer
  let finalObj = {};

  for(let i=0; i<cid.length; i++) { //Deep copy of initial array cid to cidCopy
    cidCopy.push([cid[i][0], cid[i][1]]);
  }

  // console.log("change is : " + change)
  // Adding monetary conversions information to our copy
  // cidCopy[0].push(0.01);
  // cidCopy[1].push(0.05);
  // cidCopy[2].push(0.1);
  // cidCopy[3].push(0.25);
  // cidCopy[4].push(1);
  // cidCopy[5].push(5);
  // cidCopy[6].push(10);
  // cidCopy[7].push(20);
  // cidCopy[8].push(100);

  cidCopy[0][2] = 0.01;
  cidCopy[1][2] = 0.05;
  cidCopy[2][2] = 0.1;
  cidCopy[3][2] = 0.25;
  cidCopy[4][2] = 1;
  cidCopy[5][2] = 5;
  cidCopy[6][2] = 10;
  cidCopy[7][2] = 20;
  cidCopy[8][2] = 100;
  
  
  // Adding # of availiable coins
  for(let i=0; i<cidCopy.length; i++) {
    cidCopy[i].push(Math.round(cidCopy[i][1] / cidCopy[i][2]));
  }

  // console.log(cidCopy);

  for(let i=cidCopy.length-1; i>= 0; i--) { // start from greatest
    if(change > cidCopy[i][2]) { 
          length = cidCopy[i][3];
      for(let j=1; j<=length; j++) {
        val = cidCopy[i][2];
        if(change >= val) {
          change -= val;
          change = change.toFixed(2);
          cidCopy[i][3]--;
          cidCopy[i][1] = cidCopy[i][2] * j;
        }
      }
      returnArr.push([cidCopy[i][0], cidCopy[i][1]]);
    }
  }

  // console.log(cidCopy);

  // Determine if any bills/coins are left in the drawer
  for(let i=0; i<cidCopy.length; i++) {
    rcid += cidCopy[i][3];
  }

  // console.log(change)
  // Floating round error
  if(change < 0.01) change *= 100;
  // console.log(change);

  finalObj = {
    status : "OPEN",
    change : returnArr
  }

  if(change > 0) {
    finalObj.status = "INSUFFICIENT_FUNDS";
    finalObj.change = []
    return finalObj;
  }
  else if(change == 0 && rcid === 0) {
    finalObj.status = "CLOSED";
    finalObj.change = cid;
    return finalObj;
  }
  else return finalObj;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

