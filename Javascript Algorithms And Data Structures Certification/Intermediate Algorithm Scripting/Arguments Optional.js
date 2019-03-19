function isNumber(number) {
  return typeof number === "number";
}

function addTogether(num1, num2) {
  if (!isNumber(num1) || num2 && !isNumber(num2))
    return undefined;

  if (num2 && isNumber(num2)) {
    return num1 + num2;
  }

  return function (num3) {
    if (!isNumber(num3))
      return undefined;

    return num1 + num3
  }
}

addTogether(2, 3);

