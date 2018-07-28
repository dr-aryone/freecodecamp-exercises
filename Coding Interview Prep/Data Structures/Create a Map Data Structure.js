var Map = function() {
  this.collection = {};
  // change code below this line
  this.add = function(key, value) {
    this.collection[key] = value;
  }

  this.remove = function(key) {
    delete this.collection[key];
  }

  this.get = function(key) {
    return this.collection[key];
  }

  this.has = function(key) {
    if(this.collection.hasOwnProperty(key))
      return true;
    return false;
  }

  this.values = function() {
    let vals = [];
    for(let key in this.collection){
      vals.push(this.collection[key]);
    }
    return vals;
  }

  this.size = function() {
    let arr = this.values();
    return arr.length;
  }

  this.clear = function() {
    this.collection = {};
  }
  // change code above this line
};