//using bind
let multiply = function (x, y) {
  console.log(x * y);
};
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(3);

//using closures

let multiply1 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};
var close = multiply1(2);
close(5);

//why?

// Currying helps you to avoid passing the same variable
// again and again. It helps to create a higher order function.
// It extremely helpful in event handling

//what?
// Currying refers to the process of transforming a function
// with multiple arity into the same function with less arity.
// The curried effect is achieved by binding
// some of the arguments to the first function invoke,
// so that those values are fixed for the next invocation

//
// Arity (from Latin) is the term used to refer
// to the number of arguments or operands in a function
// or operation
const sum = function (x) {
  return function (y) {
    if (y) {
      return sum(x + y);
    } else {
      return x;
    }
  };
};
