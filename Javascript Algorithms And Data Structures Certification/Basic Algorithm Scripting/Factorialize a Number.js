function factorialize(num) {
  let output = 1;
  for(let i=num; i>0; i--){
    output *= i;
  }
  return output;
}

factorialize(5);