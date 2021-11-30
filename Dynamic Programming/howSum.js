/*
Write a function howSum(targetSum,numbers) that takes in a targetSum and an array of
numbers as arguments.
The function should return an array containing any combination of elements that add up
to exactly the targetSum.If there is no
combination that adds up to the targetSum,then return null

If thre are multiple combinations possible,you may returm
any single one



howSum(7,[4,3,1,4])
howSum(7,[5,3,4,7])

                        7
        -5    / -3 /     -4 \   -7 \
            2    4           3      0
                /  \         |         
               1    0        0
                    

*/
const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return [...remainderResult, num];
    }
  }
  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [4, 3, 1]));
console.log(howSum(7, [4, 2]));
console.log(howSum(8, [3, 5, 2]));
console.log(howSum(300, [7, 14]));

//brute force
//time: O(n^m*m)
//space: o(m)
//memoized

//Memoized
