/*
Write a function bestSum(targetSum,numbers) that takes in a
targetSum and an array of numbers as arguments

The function should return an array containing the shortest
combination of numbers that add up to exactly targetSum

If there is a tie u may return any of the one

howSum(7,[5,3,4,7])

soln: [[3,4],[7]] =>[7]

bestSum(8,[2,3,5])
    ||
    \/
[2.2,2,2],[2,3,3][3,5]
    ||
    \/
Soln:[3,5]
*/

const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      //if the combination is shorter than the current  "shortest",update it
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  return shortestCombination;
};
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
//console.log(bestSum(100, [1, 2, 5, 25]));
/*
Brute Force:-

m=target sum
n=numbers.length

Time complexity:O(n^m*n)
Space complexity:O(m*m)
*/
const bestSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSumMemo(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      //if the combination is shorter than the current  "shortest",update it
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
};
console.log(bestSumMemo(100, [1, 2, 5, 25]));
/*
Memoized:-

m=target sum
n=numbers.length

Time complexity:O(m^2*n)
Space complexity:O(m*m)
*/
