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
//-soln-The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.
// - What is Prototype Chain?
//soln-When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
//By definition, null has no prototype, and acts as the final link in this prototype chain

// - Why we call it __proto__ ?
// - What is inhertance in Javascript?

let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
console.log(rabbit.eats); // true (**)
console.log(rabbit.jumps); // true

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

//alert(pockets.pen); // 3
//alert(bed.glasses); // 1
//alert(table.money); // undefined

console.log("\nFunctional Prototype\n");

function add(a, b) {
  this.a = a;
  this.b = b;
  console.log(this.a + this.b);
}

add.prototype.assignA = function (a) {
  this.a = a;
  console.log(this.a + this.b);
};

add.prototype.assignB = (b) => {
  this.b = b;

  console.log(this.a + this.b);
};

const a = new add(10, 10); //20
a.assignA(20); //30
a.assignB(30); //undefined
