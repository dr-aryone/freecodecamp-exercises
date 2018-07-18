function rot13(str) { // LBH QVQ VG!
  let arr = str.split("");

    for(let i=0; i<arr.length; i++) {
        if(arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) {
            if(arr[i].charCodeAt(0) <= 77)
                arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 13);
            else
                arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - 13);
        }
    }

  return arr.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");