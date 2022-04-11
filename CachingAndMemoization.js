//q: Implement Caching / Memoization

function myMemoize(fn, context) {
  //   //type1
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);

    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      console.log("Fetching from cache", n);
      return cache[n];
    } else {
      console.log("Calculating result", n);
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

//res={"5,6":30}

const clumsysquare = (num1, num2) => {
  for (let i = 1; i < 1000000000; i++) {}
  return num1 * num2;
};

const memoizesquare = myMemoize(clumsysquare);

console.log("First Call");

console.log(clumsysquare(9467, 7649));

console.log("First Call");

console.log("Second Call");

console.log(clumsysquare(9467, 7649));

console.log("Second Call");

console.log("\n////////////////////\n");

console.log("Memoized First Call");

console.log(memoizesquare(9467, 7649));

console.log("Memoized First Call");

console.log("Memoized Second Call");

console.log(memoizesquare(9467, 7649));

console.log("Memoized Second Call");
