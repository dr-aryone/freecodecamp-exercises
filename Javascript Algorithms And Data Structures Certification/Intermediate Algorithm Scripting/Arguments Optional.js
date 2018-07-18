function addTogether() {
  for (let i of arguments) {
      var oneNumber = i
      if (typeof i !== "number") {
          return undefined
      }
  }
  if (arguments.length === 2) {
      return arguments[0] + arguments[1];
  } 
  
  else {
      return function sum(num) {
          if (typeof num !== "number") {
              return undefined
          } else {
          return oneNumber + num;
          }
      };
  }
}

addTogether(2)(3)