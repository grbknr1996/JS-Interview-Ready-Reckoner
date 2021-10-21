func();
var func = function () {
  console.log("a");
};
function func() {
  console.log("b");
}
func();

// let a = [1, 2, 3, 3, 3, 4];
// // console.log(new Set([...a]));

// a = a.filter((element, index, arr) => {
//   return arr.indexOf(element) === index;
// });
// console.log(a);
