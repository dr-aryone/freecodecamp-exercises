function getFinalOpenedDoors () {
  let doors = [];
  let finalDoors = [];

  for(let i=0; i<100; i++) {
    doors.push(false);
  }

  for(let i=0; i < 100; i++) {
    for(let j=i; j < 100; j += i+1) {
        doors[j+1] = !doors[j+1];
    }
  }

  for(let i=0; i<doors.length; i++) {
    if(doors[i])
      finalDoors.push(i);
  }

  return finalDoors;
  // Good luck!
}

getFinalOpenedDoors();