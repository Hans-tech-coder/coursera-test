// Functions are First-Class Data Types
// Functions ARE objects
function multiply(x, y) {
  return x * y;
}
multiply.version = "v.1.0.0";
console.log(multiply.version);

// Function factory
function makeMultiplier(multiplier) {
  var myFunc = function (x) {
    return multiplier * x;
  };

  return myFunc;
}

var multipyBy3 = makeMultiplier(3);
console.log(multipyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// Passing functions as arguments
function doOperation(x, operation) {
  return operation(x);
}

var result = doOperation(5, multipyBy3);
console.log(result);
result = doOperation(100, doubleAll);
console.log(result);