// https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-symmetric-difference/16086

function sym() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
  }

  function symDiff(arrayOne, arrayTwo) {
      var result = [];

      arrayOne.forEach(function(item) {
          if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
              result.push(item);
          }
      });

      arrayTwo.forEach(function(item) {
          if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
              result.push(item);
          }
      });

      return result;
  }

  // Apply reduce method to args array, using the symDiff function
  return args.reduce(symDiff);
}

// function sym() {
//   let newArr = [];
//   let nextArr = [];
//   let arr = Array.from(arguments);

//   for(let i=0; i<arr[0].length; i++) {
//     if(arr[1].indexOf(arr[0][i]) < 0 && newArr.indexOf(arr[0][i]) < 0) newArr.push(arr[0][i]);
//   }

//   for(let j=0; j<arr[1].length; j++) {
//     if(arr[0].indexOf(arr[1][j]) < 0 && newArr.indexOf(arr[1][j]) < 0) newArr.push(arr[1][j]);
//   }
//   for(let i=2; i<arr.length; i++) {
//     for(let j=0; j<arr[i].length; j++){
//       if(newArr.indexOf(arr[i][j]) < 0 && nextArr.indexOf(arr[i][j]) < 0) 
//         nextArr.push(arr[i][j]);
//       else{
//         console.log("index " + nextArr.indexOf(arr[i][j]) + " val " + arr[i][j])
//         if(newArr.indexOf(arr[i][j]) >= 0) {
//           newArr.splice(newArr.indexOf(arr[i][j]), 1);
//         }
//       }
//       console.log("j is " + j + " newArr " + newArr + " nextArr " + nextArr)
//     }
//   }
//   console.log("newArr " + newArr)
//   console.log("nextArr " + nextArr)
//   return newArr.concat(nextArr).sort((a,b) => a-b);
// }

// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])