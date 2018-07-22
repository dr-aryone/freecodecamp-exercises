//credit to this post. https://forum.freecodecamp.org/t/lost-at-no-repeats-please-spoilers/135736/17

function permAlone(str) {
  var arr = str.split('');
  var perms = [];

  permutation(arr, arr.length, perms);

  var result = checkRepeating(perms);

  return result;
}

var swap = function(array, pos1, pos2) {
  var tmp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = tmp;
};

var permutation = function(array, n, output) {
  if (n === 1) {
      output.push(array.join(''));
  } else {
      for (var i = 0; i < n - 1; i++) {
          permutation(array, n - 1, output);
          n % 2 ? swap(array, 0, n - 1) : swap(array, i, n - 1);
      }
      permutation(array, n - 1, output);
  }
};

var checkRepeating = function(array) {
  var regex = /(.)\1/;
  var counter = 0;

  array.forEach(function(el) {
      if (!el.match(regex)) counter++;
  });

  return counter;
};

permAlone("aab");