//What is a temporal dead zone?
// Temporal dead zone is the time since
// when "let" is hoisted to the time it is allocated a value .

//Are let and const DECLARATIONS hoisted in Javascript?

// Soln: let and const are hoisted in Javascript
// but in temporal deadzone for the time being.
//ex:
// console.log(b); //-->undefined
// //console.log(a); //-->ReferenceError: Cannot access 'a' before initialization
// let a = 10;
// console.log(a); //10
// var b = 100;

//SyntaxError vs ReferenceError vs TypeError?

// var w = 10;
// var w = 10;
//No error

// let p = 10;
// let p = 20;
//Uncaught SyntaxError: Identifier 'p' has already been declared

//let is stricter than var

//const is more stricter than let
//const b = 1000;

//ex:

// let a;
// a=10;
// console.log(a);
//possible

// const b;
// b=1000;
// console.log(b);
///syntax error

// const x=100;
// x=23;
//type error

// What is a block in Javascript?

// --> let and const block scoped

// {} --> block-->it is also know as compound statement

// {
//     var a=10;
//     console.log(a);
// }

// ex:
// if(true){
//      var a=10;
//     console.log(a);
// }-->block

//block scope?-->what all variable and function we can access in block
// var a = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);==>10
//   console.log(b);
//   console.log(c);
// }
// console.log(a);===>10
// console.log(b); //ReferenceError: b is not defined
// console.log(c); //ReferenceError: c is not defined

//  Now, when a variable is declared in a certain scope having
//  the same name defined on its outer scope
//  and when we call the variable from the inner scope,
//   the value assigned to the variable
//    in the inner scope is the value that will
//    be stored in the variable in the memory space.
//  This is known as Shadowing or Variable Shadowing.

// let x = 15;
// {
//   let x = 10;
//   console.log(x); //==> 10
// }
// console.log(x); //==>15
//Similarly it happens for const

// var c = 100;
// function vx() {
//   var c = 20;
//   console.log(window.c);===>100
//   window.c = 30;
// }
// vx();
// console.log(c);===>30

//illegal shadowing
//ex:invalid
// let a = 20;
// {
//   var a = 20;
// }

//ex2: var is function scoped so this is valid
// let a = 30;

// function z() {
//   var a = 40;
// }

//lexical scope
// const a = 20;
// {
//   const a = 100;
//   {
//     const a = 200;
//     console.log(a); //200
//   }
//   console.log(a); //100
// }
// console.log(a); //20
