let counter = 0;
function getData() {
  console.log("fetching Data=", counter);
}

function myDebounce(call, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    setTimeout(() => {
      call();
    }, d);
  };
}
const BetterFunction = myDebounce(getData, 1000);

/*
Debouncing in JavaScript is a practice used to improve browser performance. 
There might be some functionality in a web page which requires time-consuming computations. 
If such a method is invoked frequently, it might greatly affect the performance of the browser,
as JavaScript is a single threaded language. 
*/

const printStar = (num) => {
  let str = "";
  for (let index = 0; index < num; index++) {
    str += "*";
    console.log(str);
  }
};

printStar(5);
