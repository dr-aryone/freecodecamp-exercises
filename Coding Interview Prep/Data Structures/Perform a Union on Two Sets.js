function Set() {
  // the var collection will hold the set
  var collection = [];
  // this method will check for the presence of an element and return true or false
  this.has = function(element) {
      return (collection.indexOf(element) !== -1);
  };
  // this method will return all the values in the set
  this.values = function() {
      return collection;
  };
  // this method will add an element to the set
  this.add = function(element) {
      if(!this.has(element)){
          collection.push(element);
          return true;
      }
      return false;
  };
 // this method will remove an element from a set
  this.remove = function(element) {
      if(this.has(element)){
         var index = collection.indexOf(element);
          collection.splice(index,1);
          return true;
      }
      return false;
  };
  // this method will return the size of the set
  this.size = function() {
      return collection.length;
  };
  // change code below this line
  this.union = function(secondSet) {
      let union = new Set();
      let firstSet = this.values();
      var secondSet = secondSet.values();
      firstSet.forEach(function(e){
          union.add(e);
      });
      secondSet.forEach(function(e){
          union.add(e);
      });
      return union;
  };
  // change code above this line
}