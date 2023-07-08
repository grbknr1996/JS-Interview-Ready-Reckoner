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

import "./styles.css";

/*
q1. Create a button UI AND ADD DEBOUNCE AS FOLLOWS
--> SHOW BUTTON PRESSED <X> TIMES EVERY BUTTON IS PRESSED
-->INCREASE TRIGERRED Y TIMES COUNT AFTER 800 MS OF DEBOUNCE
*/
const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var triggerCount = 0;
var pressedCount = 0;

const myDebounce = (cb, d) => {
  let timer = 0;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const myThrottle = (cb, d) => {
  let last = 0;

  return function (...args) {
    let now = new Date().getTime();
    console.log(now - last);
    if (now - last < d) return;
    console.log("it comes");
    last = now;
    return cb(...args);
  };
};

btn.addEventListener("click", () => {
  console.log("click");
  btnPress.innerHTML = ++pressedCount;
  //debounceCount();
  throttled();
});

const debounceCount = myDebounce(() => {
  triggerCount += 1;
  count.innerHTML = ++triggerCount;
}, 800);

const throttled = myThrottle(() => {
  ++triggerCount;
  count.innerHTML = triggerCount;
}, 1000);
