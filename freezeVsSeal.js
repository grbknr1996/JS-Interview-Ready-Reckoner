/*Difference between Object.seal and Object.freeze
Both freeze and seal are used to create non extensible objects in JavaScript, but there are plenty of differences between them.
 Object.seal() allows changes to the existing properties of an object whereas Object.freeze() does not allow so. 
 Object.freeze() makes an object immune to everything even little changes cannot be made. 
Object.seal() prevents from deletion of existing properties but cannot prevent them from external changes.
*/

// creates an object
var obj = {
  // assigns 10 to value
  value: 10,
};
// creates a non-extensible object
Object.seal(obj);
// the value gets updated to 20
obj.value = 20;
console.log(obj.value);

var obj1 = {
  // assigns 10 to value
  value: 10,
};
// creates a non-extensible object
Object.freeze(obj1);
// updates the value
obj1.value = 20;
// but cannot change the existing value
console.log(obj1.value);
