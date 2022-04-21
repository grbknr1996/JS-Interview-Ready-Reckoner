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

// const memoize = (fn) => {
//   let cache = {};
//   return (...args) => {
//     let n = args[0];
//     if (n in cache) {
//       console.log("Fetching from cache", n);
//       return cache[n];
//     } else {
//       console.log("Calculating result", n);
//       let result = fn(n);
//       cache[n] = result;
//       return result;
//     }
//   };
// };

//res={"5,6":30}

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 1000000000; i++) {}
  return num1 * num2;
};

const memoizedClumsyProduct = myMemoize(clumsyProduct);

console.time("First Call");

console.log(clumsyProduct(9467, 7649));

console.timeEnd("First Call");

console.time("Second Call");

console.log(clumsyProduct(9467, 7649));

console.timeEnd("Second Call");

console.log("\n////////////////////\n");

console.time("Memoized First Call");

console.log(memoizedClumsyProduct(9467, 7649));

console.timeEnd("Memoized First Call");

console.time("Memoized Second Call");

console.log(memoizedClumsyProduct(9467, 7649));

console.timeEnd("Memoized Second Call");
/*Output-
72413083
First Call: 946.975ms
72413083
Second Call: 938.694ms

////////////////////

[ 9467, 7649 ]
72413083
Memoized First Call: 635.929ms
[ 9467, 7649 ]
72413083
Memoized Second Call: 1.622ms*/
