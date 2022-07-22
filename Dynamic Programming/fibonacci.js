const fib = (n) => {
  if (n <= 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

//n=5
//fib(4)+fib(3)
//fib(3)+fib(2)     +   fib(2) +fib(1)
//fib(2)+fib(1)+fib(2)  +   fib(2)+fib(1)
//1+1+1 + 1 +1

console.log(fib(5));

console.log(fib(8));

//console.log(fib(50));==>IT TAKES A LOT OF TIME
/*                                 height       element creation
                7                   1               1
            /       \               
           6         5              2               2
        /    \      /  \    
       5     4      4   3           3               4
      / \   / \    / \ / \
     4  3  3   2  3  2 2  1         4               8
    / \ / \/\    /\
   3   21  212   2 1                5
   /\
  2  1                              6

 Space complexity O(N-1)===O(N)

 time complexity=O(2^n)
*/

//memoization
//js object ,keys will be arg to function ,value will be return value
const fibMemo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
};

console.log(fibMemo(50));

//time complexity==O(2N)===>O(N)
//SPACE O(N)

let forFib = (n) => {
  let a = 0,
    b = 1;
  process.stdout.write(a + "," + b + ",");
  for (let i = 3; i <= n; i++) {
    s = a + b;
    process.stdout.write(`${s},`);
    a = b;
    b = s;
  }
};
forFib(8);

/*Tabulation:
 The 0th number of the sequence is 0
 the 1st number of the sequence is 1

 To generate the next number of the sequence
 we sum the previous  two

 n     : 0  1   2   3   4   5   6   7   8   9   ...
 fib(n): 0  1   1   2   3   5   8   13  21  34  ...

 time :O(n)
space: O(n)

*/
console.log("\n");
const fibTabulation = (n) => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 0; i <= n; i++) {
    table[i + 1] = table[i + 1] + table[i];
    table[i + 2] = table[i + 2] + table[i];
  }
  return table[n];
};
console.log(fibTabulation(6));
console.log(fibTabulation(50));
