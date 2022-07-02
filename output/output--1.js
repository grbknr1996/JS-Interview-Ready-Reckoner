global.length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  },
};

obj.method(fn, 4, 4, 4, 4);

var b = 1;
function outer() {
  console.log(b);
  var b = 2;
  function inner() {
    console.log(b);
    b++;
    console.log(b);
    var b = 3;
    console.log(b);
  }
  inner();
}
outer();
