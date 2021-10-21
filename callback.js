//What is a callback function in javascript

//Functions that you pass on as a argument to another
//function is known as callback function.This callback functions are
//very powerful they give us access to the asynchronous world in a synchronous
//single threaded language

//ex:

setTimeout(function () {
  console.log("Timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
} //function y is callback  as it is passed as an argument
x(function y() {
  console.log("y");
});

//**Javascript is a synchronous and single threaded language

//**Blocking the main thread

//**Power of Callbacks

//Deep about event listensers
//ex:

// const bclick = document.getElementById("clickMe");
// bclick.addEventListener("click", () => console.log("CLICKED!!!"));

//Closures demo with event listeners
//ex:how many times a button is clicked
function attachEventListener() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button clicked", ++count);
  });
}
attachEventListener();
//output:
//Button clicked 1
// Button clicked 2
// Button clicked 3
// Button clicked 4
// Button clicked 5
// Button clicked 6

//***Scope demo with event listeners

//Garbage Collection and removeEventListener
