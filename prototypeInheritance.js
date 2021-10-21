//what is prototype?
//Prototypes are the mechanism by which
//JavaScript objects inherit features from one another
//JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which
//acts as a template object that
//it inherits methods and properties from.
let arr = ["g", "o"];
let object = {
  name: "g",
  city: "kolkata",
  getIntro: function () {
    console.log(this.name + "from" + this.city);
  },
};

console.log(arr.__proto__); //Array.protptype
console.log(arr.__proto__.__proto__); //Object.prototype
console.log(arr.__proto__.__proto__.__proto__); //null
//everything in Javascript is object

let object2 = {
  name: "ff",
};
//never do this
object2.__proto__ = object;
console.log(object2.city); //kolkata

Function.prototype.mybind = function () {
  console.log("bind!!!");
};
function fun() {}
console.log(fun.__proto__.mybind());
// - What is Prototype?
// - What is Prototypal Inheritance?
// - What is Prototype Chain?
// - Why we call it __proto__ ?
// - What is inhertance in Javascript?
