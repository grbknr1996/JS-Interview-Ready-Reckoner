///arr.reduce((accumulator,currentelement,index,array)=>{},initial_value)
//1.reducing to a single value

const numbers = [10, 20, 30, 40, 50];

let sum = numbers.reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);

numbers.reduce((sum, value) => sum + value, 0);

console.log("sum=", sum); //sum= 150

const avg = numbers.reduce((acc, num, index, arr) => {
  return acc + num / arr.length;
}, 0);

console.log("average=", avg); //average= 30

const names = ["lg", "samsung", "panasonic", "motorola"];

let concat = names.reduce(
  (str, name, index) => str + (index === 0 ? "" : ",") + name,
  ""
);
console.log("Concated strings=", concat); //Concated strings= lg,samsung,panasonic,motorola

//reducing to an array
const nums = [1, 2, 3, 4, 5];
let arr = [];
for (const number of nums) {
  arr = [number, ...arr];
  console.log(arr);
}
console.log("array converted=", arr);
/**
 * [ 1 ]
[ 2, 1 ]
[ 3, 2, 1 ]
[ 4, 3, 2, 1 ]
[ 5, 4, 3, 2, 1 ]

array converted=[ 5, 4, 3, 2, 1 ]
 */

console.log(nums.reduce((arr, number) => [number, ...arr], [])); //[ 5, 4, 3, 2, 1 ]

//if you want an input array to create a different size output array
//reduce can do that for you
const groups = [
  [3, 2],
  [2, 5],
  [3, 7],
];

const output = groups.reduce((arr, [count, value]) => {
  for (let index = 0; index < count; index++) {
    arr.push(value);
  }
  return arr;
}, []);

console.log(output);
/**output
 [
  2, 2, 2, 5,
  5, 7, 7, 7
]
 */
Array(3); //[,,]
Array(3).fill(2); //[2,2,2]

let output2 = groups.reduce((arr, [count, value]) => {
  return [...arr, ...Array(count).fill(value)];
}, []);

console.log(output2);
/**output
 [
  2, 2, 2, 5,
  5, 7, 7, 7
]
 */
//reduce can take an array and reduce it to an object
const n = [12, 15, 12, 2, 6, 6, 2, 12];

const output3 = n.reduce((obj, element) => {
  obj[element] = obj[element] ? obj[element] + 1 : 1;
  return obj;
}, {});

console.log(output3); //{ '2': 2, '6': 2, '12': 3, '15': 1 }

output4 = n.reduce((lookup, value) => ({
  ...lookup,
  [value]: (lookup[value] ?? 0) + 1,
}));
// The nullish coalescing operator (??)
// is a logical operator that returns its right-hand side operand
// when its left-hand side operand is null or undefined,
// and otherwise returns its left-hand side operand.

console.log(output4); //{ '2': 2, '6': 2, '12': 2, '15': 1 }

const output5 = n.reduce(
  ({ min, max }, value) => ({
    min: Math.min(min, value),
    max: Math.max(max, value),
  }),
  {
    min: Infinity,
    max: -Infinity,
  }
);
console.log(output5); //{ min: 2, max: 15 }

const n2 = [1, 2, 3, 4, 5];
//includes
const output6 = n2.reduce(
  (includes, value) => (includes ? includes : value === 3),
  false
);
console.log(output6); //true

//slice
output7 = n2.reduce(
  (arr, value, index) => (index > 0 && index < 4 ? [...arr, value] : arr),
  []
);
console.log(output7);
[2, 3, 4];

//values ,keys and entreies .Concept of iterator
const values = [10, 20, 30, 40, 50];
console.log(values.entries()); //{[Iterator]}

for (const value of values.entries()) {
  console.log(value);
}
/*Output
[key,value]
[ 0, 10 ]
[ 1, 20 ]
[ 2, 30 ]
[ 3, 40 ]
[ 4, 50 ]
*/

const customers = {
  Jack: 12,
  Jim: 15,
  Sally: 18,
};
function sum2(objArray) {
  return Object.values(objArray).reduce((sum, value) => sum + value, 0);
}
console.log("sum=" + sum2(values)); //sum=150
console.log("customers=" + sum2(customers)); //customers=45

//reduce for sequential async
const ids = [10, 20, 30];
function getById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Got ${id}`);
      resolve(id);
    }, 1000);
  });
}
ids.reduce(async (promise, id) => {
  await promise;
  return getById(id);
}, Promise.resolve());
