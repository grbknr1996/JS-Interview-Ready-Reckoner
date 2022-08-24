var arr = [1, 2, 4, 8, 10];

//array.forEach(callback(currentValue,index,arr));
arr.forEach((currentValue, index, arr) => {
  console.log(currentValue, index, arr);
});
/*Output
polyfillsforArrays.js:5 1 0 (5) [1, 2, 4, 8, 10]
polyfillsforArrays.js:5 2 1 (5) [1, 2, 4, 8, 10]
polyfillsforArrays.js:5 4 2 (5) [1, 2, 4, 8, 10]
polyfillsforArrays.js:5 8 3 (5) [1, 2, 4, 8, 10]
polyfillsforArrays.js:5 10 4 (5) [1, 2, 4, 8, 10]*/

Array.prototype.myForEach = function (callback) {
  const arr = this;
  for (let index = 0; index < arr.length; index++) {
    let currentValue = arr[index];
    callback(currentValue, index, arr);
  }
};
arr.myForEach((currentValue) => {
  console.log(currentValue + 100);
});
/*Output

polyfillsforArrays.js:22 101
polyfillsforArrays.js:22 102
polyfillsforArrays.js:22 104
polyfillsforArrays.js:22 108
polyfillsforArrays.js:22 110
*/

//array.map(callback(currentValue,index,array))
Array.prototype.myMap = function (callback) {
  let result = [];
  const arr = this;
  for (let index = 0; index < arr.length; index++) {
    let currentValue = arr[index];
    result.push(callback(currentValue, index, arr));
  }
  return result;
};
let result = arr.myMap((item) => {
  return (item = item + 1000);
});
console.log(result);
/*
Output:
(5) [1001, 1002, 1004, 1008, 1010]

*/
Array.prototype.myFilter = function (callback) {
  let result = [];
  const arr = this;
  for (let index = 0; index < arr.length; index++) {
    let currentValue = arr[index];
    if (callback(currentValue, index, arr)) {
      result.push(currentValue);
    }
  }
  return result;
};

let filterResult = arr.myFilter((item) => item > 2);
console.log(filterResult);
/* Output
 [4, 8, 10]
*/

Array.prototype.myReduce = function (callback, initial) {
  //callback(currentValue,accumulator,arr)
  let arr = this;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    initial = initial !== undefined ? callback(initial, element, arr) : element;
  }
  return initial;
};

let reduceResult = arr.myReduce((a, b) => a + b);
console.log(reduceResult);

//output: 25

Array.prototype.myFind = (callback) => {
  let arr = this;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (callback(element, index, arr)) {
      return element;
    }
  }
};

const found = arr.find((element) => element > 8);

console.log(found);

//output:10

//groupby

const data = [
  { Phase: "Phase 1", Step: "Step 1", Task: "Task 1", Value: "5" },
  { Phase: "Phase 1", Step: "Step 1", Task: "Task 2", Value: "10" },
  { Phase: "Phase 1", Step: "Step 2", Task: "Task 1", Value: "15" },
  { Phase: "Phase 1", Step: "Step 2", Task: "Task 2", Value: "20" },
  { Phase: "Phase 2", Step: "Step 1", Task: "Task 1", Value: "25" },
  { Phase: "Phase 2", Step: "Step 1", Task: "Task 2", Value: "30" },
  { Phase: "Phase 2", Step: "Step 2", Task: "Task 1", Value: "35" },
  { Phase: "Phase 2", Step: "Step 2", Task: "Task 2", Value: "40" },
];
