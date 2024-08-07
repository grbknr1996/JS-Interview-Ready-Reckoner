//Event Capturing/TRICKLING?
//-->JS Event Listeners fire not only on a single DOM element
//   but on all its decendants

//Event Bubbling?
//Inverse of Capturing.Also known as propagation,events on an
//element will bubble up and also fire on all parents
//Bubble always comes out

//TRICKLING DOWN!! AND BUBBLING UP!!
/*
addEventListenser('click',()=>{},useCapture) if use Capture is true
then capturing happens else if its false then it is bubbling
*/
//eg.
//FOR BUBBLING
// document.getElementById("grandparent").addEventListener("click", () => {
//   console.log("grandparent Clicked!");
// });
//output:
//grandparent Clicked!

// document.getElementById("parent").addEventListener("click", () => {
//   console.log("parent Clicked!");
// });
//output:
//parent Clicked!
//grandparent Clicked!

// document.getElementById("child").addEventListener("click", () => {
//   console.log("child Clicked!");
// });
//output:
/*child Clicked!
parent Clicked!
grandparent Clicked! */

//FOR TRICKLING AND CAPTURING

document.getElementById("grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent Clicked!");
  },
  true
);
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("parent Clicked!");
  },
  true
);
document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("child Clicked!");
  },
  true
);

//currentTarget -the element with the listener attached
//target-the element that triggered the event .

let foo; //undefined
const bar = null; //null
console.log(foo == bar); //true //double equals checks for equality--true
console.log(foo === bar); //false//=== checks for both equality and type

/*
In JavaScript (assuming you are referring to JavaScript), when you create two objects like obj1 = {} and obj2 = {}, you are creating two separate objects in memory. Even though both objects might appear identical because they are empty, they are different objects with their own distinct memory addresses.

So, when you compare obj1 and obj2 using the equality operator == or the strict equality operator ===, the comparison evaluates to false because these operators compare object references, not the content of the objects.

For example:

javascript
Copy code
const obj1 = {};
const obj2 = {};

console.log(obj1 === obj2); // false
console.log(obj1 == obj2);  // false
In this case, obj1 and obj2 are two separate objects, and comparing them using == or === will 
result in false because they have different memory addresses.
 If you want to compare their content, you would need to manually compare the properties of the objects, 
which may require iterating through the properties and values to check if they are the same.
*/
