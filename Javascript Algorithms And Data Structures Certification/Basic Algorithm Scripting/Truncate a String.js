function truncateString(str, num) {
  return str.length <= num ? str : str.slice(0, num) + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
// truncateString("Peter Piper picked a peck of pickled peppers", 11)
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
