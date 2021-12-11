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

const raw = {
  item1: { key: "sdfd", value: "sdfd" },
  item2: { key: "sdfd", value: "sdfd" },
  item3: { key: "sdfd", value: "sdfd" },
};

const allowed = ["item1", "item3"];

const filtered = Object.keys(raw)
  .filter((key) => allowed.includes(key))
  .reduce((obj, key) => {
    obj[key] = raw[key];
    return obj;
  }, {});

console.log(filtered);

/*
{
  "item1": {
    "key": "sdfd",
    "value": "sdfd"
  },
  "item3": {
    "key": "sdfd",
    "value": "sdfd"
  }
}
*/
