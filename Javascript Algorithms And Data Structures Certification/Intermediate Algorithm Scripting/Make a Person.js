// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)

var Person = function(firstAndLast) {
  let fullName = firstAndLast;
  let firstName = firstAndLast.split(" ")[0];
  let lastName = firstAndLast.split(" ")[1];

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(first) {
    firstName = first;
    fullName = first + " " + fullName.split(" ")[1];
  }

  this.setLastName = function(last) {
    lastName = last;
    fullName = fullName.split(" ")[0] + " " + last;
  }

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
    firstName = firstAndLast.split(" ")[0];
    lastName = firstAndLast.split(" ")[1];
  }

};

var bob = new Person('Bob Ross');
