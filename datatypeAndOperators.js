/**
 * Primitive:
 *  -1.string 2.number 3.bigInt 4.boolean 5.Undefined  6.symbol
 *Non-primitive:
 1.Object
 2.Arrays
 */
console.log(typeof "Abc"); //string
console.log(typeof NaN); //number
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof $); //undifned in node but it will be a function in browser as browsers have Jquery in built

//instance of explanation
function Car(model, year) {
  this.model = model;
  this.year = year;
}
const auto = new Car("honda", 1998);

console.log(auto instanceof Car); //true
console.log(auto instanceof Object); //true

/*
0-000
1-001
2-010
3-011
4-100
*/
/*
  AND
  0&0=0
  0&1=0
  1&1=1

  OR
  0|0=0
  0|1=1
  1|0=1
  1|1=1

  XOR
  0^0=0
  1^0=1
  0^1=1
  1^1=0
  */

console.log((4).toString(2)); //100
console.log(parseInt("100", 2)); //4
console.log((0b100).toString(10)); //4
console.log(0 | 1); //1
console.log(0 ^ 1); //1
console.log((9).toString(2)); //1001
console.log(9 << 2); //1001 00-->36
console.log((0b100100).toString(10)); //36
