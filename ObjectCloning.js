/*
Object.assign(target,source):Object. assign() is used to copy enumerable properties.
from a source object to a target object. Also, the Object. assign() method returns the newly formed target object.


*/

const target = { a: "toy", b: "boy" };
const source = { b: "car", c: "pot" };

const returnedTarget = Object.assign(target, source);

target.b = "new toy";

console.log(target);
/*{
  a: "toy",
  b: "new toy",
  c: "pot"
}*/

console.log(returnedTarget);
/* 
{
  a: "toy",
  b: "new toy",
  c: "pot"
}
*/
console.log(source);
/*
{
  b: "car",
  c: "pot"
}
 */

/*
Object.create() is used to create new object using the existing object as a prototype . 
This means the returned object inherits the properties of all prototypes that are linked with the source object 
in addition to the properties of the source object itself. 
Thus the target object is not merely a copy of the source object. Check the below example
*/
