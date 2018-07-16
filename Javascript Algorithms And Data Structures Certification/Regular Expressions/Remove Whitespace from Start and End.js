let hello = "   Hello, World!  ";
let wsRegex = /^\s*(\S.*\S)\s*$/; // Change this line
let result = hello.replace(wsRegex,"$1");