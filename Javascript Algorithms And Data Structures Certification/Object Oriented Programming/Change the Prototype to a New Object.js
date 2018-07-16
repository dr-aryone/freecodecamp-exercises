function Dog(name) {
    this.name = name; 
  }
  
  Dog.prototype = {
    // Add your code below this line
    numLegs : 4,
    eat : function() {
      console.log("HMMMMMS");
    },
    describe: function() {
      console.log("Just eating..");
    }
  };