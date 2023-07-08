// WHAT?
// LEXICAL Scope
// Javascript has something called scopping.
// The variables that are present
// in upper scope are already available in lower scope

//ex-1

// let i = 1;
// const f = () => {
//   console.log(i);
// };
// f(i);

// Output-1

// Why?
//  In all cases u define function in some scope and use it
//  in some other scope

//ex-2

// let f;
// if (true) {
//   let i = 1;
//   f = () => {
//     console.log(i);
//   };
// }
// //console.log(i);
// console.dir(f);
// f();

//ex3

// let f = () => {
//   let i = 1;
//   let j = 2; //j doesnt have closure since we are not using it
//   return () => {
//     console.log(i);
//   };
// };

// console.dir(f());

//ex-4
//chanfe var to let to get correct output
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
console.log("after the loop");

// for let
// i=0 f(c:i(0))
// i=1 (c:i(1))
// i=2 (c:i(2))

// for var
// i=0 f(c:i(0)-->i(1)-->i(2)-->i(3))
// i=1  f(c:i(1)-->i(2)-->i(3))
// i=2 f(c:i(2)-->i(3))
// i=3 f(c:i(3))

// With var you have a function scope, and only one shared binding for all
// of your loop iterations - i.e. the i in every setTimeout callback means the same variable that
// finally is equal to 6 after the loop iteration ends.

// With let you have a block scope and when used in the for loop you get
// a new binding for each iteration - i.e. the i in every setTimeout callback means a different variable,
// each of which has a different
// value: the first one is 0, the next one is 1 etc.

// What is a Closure?
// A closure is the combination of a function bundled
//  together (enclosed) with references to its
//  surrounding state (the lexical environment).
//  In other words, a closure gives you access to an outer function’s scope from an inner function.
//  In JavaScript, closures are created every time a function is created, at function creation time.
// To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.
// The inner function will have access to the variables in the outer function scope, even after the outer function has returned.

//USAGE OF CLOSURE....
// Using Closures (Examples)
// Among other things, closures are commonly used to give objects data privacy.
// Data privacy is an essential property that helps us program to an interface, not an implementation.
//  This is an important concept that helps us build more robust software because implementation details are more
//  likely to change in breaking ways than interface contracts.
// “Program to an interface, not an implementation.”
// Design Patterns: Elements of Reusable Object Oriented Software
// In JavaScript, closures are the primary mechanism used to enable data privacy.
// When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function.
// You can’t get at the data from an outside scope except through the object’s privileged methods.
// In JavaScript, any exposed method defined within the closure scope is privileged. For example:
function sumAllNumbers(array) {
  let reducer = (currentValue, totalValue) => currentValue + totalValue;
  return array.reduce(reducer);
}

function parasiteSum(...numbers) {
  return sumAllNumbers(numbers);
}
//You need to access parasitSum() for accessing sumAllNumbers() . Accessing sumAllNumbers() directly isnt possible due to data privacy
console.log(parasiteSum(1, 2, 3));
