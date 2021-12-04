/*
Given an amount and the denominations of coins available, determine how many ways change can be made for amount. There is a limitless supply of each coin type.

Example
n=3

c={8,3,1,2}
There are 3 ways to make change for n=3 
:{1,1,1} ,{1,2} ,{3} 
*/
function getWays(target, coins) {
  // Write your code here

  if (target === 0) return 1;
  if (target < 0) return 0;
  let totalWays = 0;
  for (let coin of coins) {
    const remainder = target - coin;
    const numberOfWays = getWays(remainder, coins);
    totalWays += numberOfWays;
  }
  return totalWays;
}

function count(arr, size, target) {
  // If n is 0 then there is 1 solution
  // (do not include any coin)
  if (target == 0) return 1;

  // If n is less than 0 then no
  // solution exists
  if (target < 0) return 0;

  // If there are no coins and target
  // is greater than 0, then no
  // solution exist
  if (size <= 0 && target >= 1) return 0;

  // count is sum of solutions (i)
  // including S[m-1] (ii) excluding S[m-1]
  return (
    count(arr, size - 1, target) + count(arr, size, target - arr[size - 1])
  );
}

console.log(count([1, 2, 3], [1, 2, 3].length, 4));

console.log(getWays(4, [1, 2, 3]));
console.log(getWays(3, [8, 3, 1, 2]));
console.log(getWays(7, [1, 3, 4, 5]));
