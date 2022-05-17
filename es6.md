<h2>1. let and const keywords :</h2>

The keyword "let" enables the users to define variables and on the other hand, "const" enables the users to define constants. Variables were previously declared using "var" which had function scope and were hoisted to the top. It means that a variable can be used before declaration. But, the "let" variables and constants have block scope which is surrounded by curly-braces "{}" and cannot be used before declaration.
<br/>
<code>
let i = 10;
console.log(i); //Output 10
const PI = 3.14;
console.log(PI); //Output 3.14
</code>

<h2/>2. Arrow Functions</h2>
   ES6 provides feature known as Arrow Functions. It provides a more concise syntax for writing function expressions by removing out the "function" and "return" keywords.

Arrow functions are defined using the fat arrow (=>) notation.

// Arrow function
let sumOfTwoNumbers = (a, b) => a + b;
console.log(sum(10, 20)); // Output 30
It is evident that, there is no "return" or "function" keyword in the arrow function declaration.

We can also skip the parenthesis in the case when there is exactly one parameter, but will always need to use it when you have zero or more than one parameter.

But, if there are multiple expressions in the function body, then we need to wrap it with curly braces ("{}"). We also need to use the "return" statement to return the required value.

<h2>3. Multi-line Strings</h2>
   ES6 also provides Multi-line Strings. Users can create multi-line strings by using back-ticks(`).

It can be done as shown below :

`` let greeting =`Hello World, Greetings to all, Keep Learning and Practicing!`  ``

<h2>4. Default Parameters</h2>
   In ES6, users can provide the default values right in the signature of the functions. But, in ES5, OR operator had to be used.
<br/>
<code>
//ES6
let calculateArea = function(height = 100, width = 50) {
// logic
}
</code>
<br/>
<code>
//ES5
var calculateArea = function(height, width) {
height = height || 50;
width = width || 80;
// logic
}
</code>

<h2>5. Template Literals</h2>
   ES6 introduces very simple string templates along with placeholders for the variables. The syntax for using the string template is ${PARAMETER} and is used inside of the back-ticked string.
<br/>
<code>let name = `My name is ${firstName} ${lastName}`;</code>
<br/>
<h2>6. Destructuring Assignment</h2>
   Destructuring is one of the most popular features of ES6. The destructuring assignment is an expression that makes it easy to extract values from arrays, or properties from objects, into distinct variables.

There are two types of destructuring assignment expressions, namely, Array Destructuring and Object Destructuring. It can be used in the following manner :
<br/>
<code>
//Array Destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits; // Array destructuring assignment
console.log(a, b);

//Object Destructuring
let person = {name: "Peter", age: 28};
let {name, age} = person; // Object destructuring assignment
console.log(name, age);
</code>

<h2>7. Enhanced Object Literals</h2>
ES6 provides enhanced object literals which make it easy to quickly create objects with properties inside the curly braces.
<br/>
<code/>
function getMobile(manufacturer, model, year) {
   <br/>
return {
manufacturer,
model,
year
}
<br/>
}
<br/>
getMobile("Samsung", "Galaxy", "2020");
</code>
<h2>8. Promises</h2>
   In ES6, Promises are used for asynchronous execution. We can use promise with the arrow function as demonstrated below.
<br/>
<code>
var asyncCall = new Promise((resolve, reject) => {
   <br/>
// do something<br/>
resolve();<br/>
}).then(()=> {<br/>
console.log('DONE!');<br/>
});<br/>
</code>
<h2>9. Classes</h2>
   Previously, classes never existed in JavaScript. Classes are introduced in ES6 which looks similar to classes in other object-oriented languages, such as C++, Java, PHP, etc. But, they do not work exactly the same way. ES6 classes make it simpler to create objects, implement inheritance by using the "extends" keyword and also reuse the code efficiently.

In ES6, we can declare a class using the new "class" keyword followed by the name of the class.
<code>
<br/>
class UserProfile {<br/>
constructor(firstName, lastName) {<br/>
this.firstName = firstName;<br/>
this.lastName = lastName;<br/>
}<br/>
<br/>
getName() {<br/>
console.log(`The Full-Name is ${this.firstName} ${this.lastName}`);<br/>
}<br/>
}<br/>
let obj = new UserProfile('John', 'Smith');<br/>
obj.getName(); // output: The Full-Name is John Smith<br/>
</code>

<h2>10. Modules</h2>
    Previously, there was no native support for modules in JavaScript. ES6 introduced a new feature called modules, in which each module is represented by a separate ".js" file. We can use the "import" or "export" statement in a module to import or export variables, functions, classes or any other component from/to different files and modules.
<code>
<br/>
export var num = 50;<br/>
export function getName(fullName) {<br/>
//data<br/>
};<br/>
import {num, getName} from 'module';<br/>
console.log(num); // 50<br/>
</code>
