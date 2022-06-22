//call ,apply and bind
let name = {
  firstName: "gourab",
  lastName: "konar",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
name.printFullName();
let name2 = {
  firstName: "schin",
  lastName: "tendulkar",
};
let printName = function () {
  console.log("Mr." + this.firstName + " " + this.lastName);
};
//using call method we can do function borrowing
name.printFullName.call(name2);

printName.call(name);
printName.call(name2);

let printAddress = function (hometown) {
  console.log("Mr." + this.firstName + " " + this.lastName + " " + hometown);
};

printAddress.call(name2, "Mumbai");

//difference between apply and call is the way we pass the arguments
let printFullAddress = function (hometown, state) {
  console.log(
    "Mr." + this.firstName + " " + this.lastName + " " + hometown + " " + state
  );
};
printFullAddress.call(name2, "Mumbai", "Maha");
printFullAddress.apply(name2, ["Mumbai", "Maha"]);

//bind method
//the bind() method creates a new function that, refrences
//to the function that its called upon
//when called, has its this keyword set to the provided value

let printMyName = printFullAddress.bind(name2, "mum", ",mha"); //it returns a function
console.log(printMyName);
printMyName();

//polyfills for bind
let name3 = {
  firstName: "g",
  lastName: "k",
};
function printName2(hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state
  );
}
let printMyName2 = printName2.bind(name3);
printMyName2();

Function.prototype.mybind = function (...args) {
  //this --> printMyName2
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName3 = printMyName2.mybind(name, "dehradun", "s");
printMyName3();
/**
 *
 *Call polyfill
 */
Function.prototype.myCall = function (thisContext, ...args) {
  const symbol = Symbol();
  thisContext[symbol] = this;
  const returnValue = thisContext[symbol](...args);
  delete thisContext[symbol];
  return returnValue;
};

Function.prototype.myApply = function (thisContext, args = []) {
  return this.myCall(thisContext, ...args);
};

Function.prototype.myBind = function (thisContext, ...args) {
  return (...newArgs) => this.myApply(thisContext, [...newArgs, ...args]);
};
