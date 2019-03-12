function titleCase(str) {
  const lowerCaseArr = str.toLowerCase().split(' ');
  
  return lowerCaseArr.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

titleCase("I'm a little tea pot");
