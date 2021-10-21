console.log("hola");

function outter() {
  var a = 1;
  function inner(x) {
    if (x === 10) return;
    else {
      inner(x + 1);
      console.log(x);
    }
  }
  inner(a);
}
outter();

var a = {
  func1: () => console.log(this),
  func2: function () {
    console.log(this);
  },
};
a.func1(); //scope io global window object
a.func2(); //scope is this object

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});
myPromise.then((value) => console.log(value + "Promise happened"));
