var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast
  let firstName = fullName.split(" ")[0];
  let lastName = fullName.split(" ")[1];

  this.getFirstName = function() {
    return firstName;
  }

  this.getLastName = function() {
    return lastName;
  }

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(first) {
    firstName = first;
    fullName = first + " " + lastName;
  }

  this.setLastName = function(last) {
    lastName = last;
    fullName = firstName + " " + last;
  }

  this.setFullName = function(firstAndLast) {
    firstName = firstAndLast.split(" ")[0];
    lastName = firstAndLast.split(" ")[1];
    fullName = firstAndLast;
  }

};

var bob = new Person('Bob Ross');
bob.getFullName();