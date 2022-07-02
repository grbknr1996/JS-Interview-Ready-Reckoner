/**
 Array.prototype.concat()
The concat() method is used to merge two or more arrays.
 This method does not change the existing arrays, but instead returns a new array.
 const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
 expected output: Array ["a", "b", "c", "d", "e", "f"]
 */
function flatten1(ary) {
  var ret = [];
  for (var i = 0; i < ary.length; i++) {
    if (Array.isArray(ary[i])) {
      console.log(i + "-->" + ary[i]);
      ret = ret.concat(flatten1(ary[i]));
    } else {
      ret.push(ary[i]);
    }
  }
  return ret;
}
console.log(flatten1([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]])); // [0, 1, 2, 3, 4, 5]

//Alternatively, as an Array method:

Array.prototype.flatten = function () {
  //here this is the array
  var ret = [];
  for (var i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      ret = ret.concat(this[i].flatten());
    } else {
      ret.push(this[i]);
    }
  }
  return ret;
};

[[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]].flatten(); // [0, 1, 2, 3, 4, 5]

// using reduce
function flatten3(ary) {
  return ary.reduce(function (a, b) {
    if (Array.isArray(b)) {
      return a.concat(flatten3(b));
    }
    return a.concat(b);
  }, []);
}
