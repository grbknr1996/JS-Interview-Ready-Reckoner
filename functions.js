//Function Statement vs Function expression vs function declaration?
//Function Statement
//ex1:The function statement declares a function.
/////////////////////////////////
//a(); //assigned a copy of fn reference of a() in hoisting
//b(); //assigned as undefined value in hositing stage
function a() {
  console.log("a called");
}
a();
//Function expression:A anonymous function that can be stored in a variable
//ex 1:
var b = function () {
  console.log("b called");
};
b();
///////////////////////////////////
//The major difference between Function statement and function expression
//is hoisting

//Function declaration and Function statement both are the same thing

//Anonymous Functions
//They doesnt have their own identity
//**Arrow syntax automatically binds this to the surrounding code’s context

//Named Function Expression
var b = function xyz() {
  console.log("xyz");
};
b(); //==>correct
//xyz();//reference error

//Difference between Parameter and Argumentse
//ex-1
var c = function (
  param1 /*it is called Parameter1*/,
  param2 /*it is called Parameter2*/
) {
  console.log("b called");
};
c(1 /*argument1*/, 2 /*argument2*/);

//what are first class functions in Javascript?
//The ability to use functions as values is known as first-class-functions
// Its the process of passing function into
// another function as arguments is known
// as first class functions
//Ex:
function w() {}
var cc = function (param1) {
  console.log(param1);
};
cc(w);
//Functions are first class citizens-same as first class functions
