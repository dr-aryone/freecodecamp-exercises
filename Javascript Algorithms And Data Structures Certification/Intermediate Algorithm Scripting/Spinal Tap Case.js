function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.split(/[-\s_]|\B(?=[A-Z])/).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
