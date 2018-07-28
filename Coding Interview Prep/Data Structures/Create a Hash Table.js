//inspired by https://forum.freecodecamp.org/t/create-a-hash-table-doesnt-pass-any-tests-beta/138057

var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};
var HashTable = function() {
  this.collection = {};

  this.add = function(key, value) {
    let hashKey = hash(key);
    if (!this.collection.hasOwnProperty(hashKey)){
      this.collection[hashKey] = [];
   } 
   this.collection[hashKey].push({[key]: value});
  };

  this.remove = function(key){
    let hashed = hash(key);
    if (this.collection.hasOwnProperty(hashed)){
      if (this.collection[hashed].length === 1){
      delete this.collection[hashed];
   } else {
        this.collection[hashed] = this.collection[hashed].filter(function(item){
        return !item.hasOwnProperty(key);
      });
     }
    } else 
        return null;
  };
  
  this.lookup = function(key) { 
    let hashed = hash(key);
    if (this.collection.hasOwnProperty(hashed)) {
      let bucket = this.collection[hashed];
      let find = function(index) {
        if (bucket[index].hasOwnProperty(key)) {
          return bucket[index][key];
        } else if (index != 0) {
          return find(index - 1);
        } else {
          return null;
        };
      };
      return find(bucket.length - 1);
    } else {
      return null;
    };
  };
  // change code above this line
};