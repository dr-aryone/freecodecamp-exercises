function Stack() { 
  let collection = [];
  this.print = function() {
      console.log(collection);
  };
  // Only change code below this line
  this.push = function(e) {
      collection.push(e);
  }
  this.pop = function() {
      return collection.pop();
  }
  this.peek = function() {
      return collection[collection.length - 1];
  }
  this.isEmpty = function() {
      return collection.length < 1;
  }
  this.clear = function() {
      collection = [];
  }
  // Only change code above this line
}