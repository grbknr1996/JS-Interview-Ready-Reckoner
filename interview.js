// A closure is the combination of a function bundled
//  together (enclosed) with references to its
//  surrounding state (the lexical environment).
//  In other words, a closure gives you access
// to an outer function’s scope from an inner function.

//explain more?
// its like each and every function of javascript
// has access to its outter lexical environment ie parent

//ex:

function outter(z) {
  var a = 10;
  let c = 12;
  function inner() {
    console.log(a, b, c, z);
  }
  var b = 20;
  return inner;
}
outter()();
//this IS IIFE

var close = outter("helloworld");
close();

function outtest() {
  var i = 22;
  function outter(z) {
    var a = 10;
    let c = 12;
    function inner() {
      console.log(a, b, c, z, i);
    }
    var b = 20;
    return inner;
  }
  return outter;
}
var cl = outtest()("hel");
cl();
/////////////////////////////////////////
//data hiding
// function counter() {
//   var counter = 0;
//   function incrementCounter() {
//     counter++;
//     console.log(counter);
//   }
//   return incrementCounter;
// }

// var counter1 = counter();
// counter1();

// var counter2 = counter();
// counter2();

//////////////////////////
// function Counter() {
//   var counter = 0;
//   this.incrementCounter = function () {
//     counter++;
//     console.log(counter);
//   };
//   this.decrementCounter = function () {
//     counter--;
//     console.log(counter);
//   };
// }

// var counter1 = new Counter();
// counter1.incrementCounter();
/////////////////////////////////
// CLOSURE disadv: overconsumption of memory add
// those closed over variables are not garbage collected
// until the program gets closed .It may cause memory leaks
// as they get accumulated overtime

//GARBAGE COLLECTOR
// IT IS A PROGRAM THAT FREES UP UNUTILIZED MEMORY.
// IT RESIDES IN JS ENGINE .IN HLL LANGUAGES LIKE JS
// IT IS GENERALLY DONE BY ENGINE ITSELF UNILIKE C WHERE
// IT IS DONE BY DEVELOPER;

//how closure and garbage collector related?
function a() {
  var x = 0;
  let d = 10; //-->d is garbage collected smartly
  return function b() {
    console.log(x);
  };
}

var y = a();
y();

/*
Arrow functions
Arrows is a new syntax for functions, which brings several benefits:

**Arrow syntax automatically binds this to the surrounding code’s context

**The syntax allows an implicit return when there is no body block,
  resulting in shorter and simpler code in some cases

**Last but not least, => is shorter and simpler than function, 
  although stylistic issues are often subjective
*/
