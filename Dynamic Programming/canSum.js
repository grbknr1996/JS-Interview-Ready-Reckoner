/*
Write a function canSum(targetSym,numbers) that takes
in a targetSum and an array of numbers as arguments

The function should return a boolean indicating whether
or not it is possible to generate the targetSum using
numbers from the array
you may use an element of the array as amany times as needed

You may assume all numbers are non-negative

canSum(7,[5,3,4,7]) ->True
4+3=7,7

canSum(7,[4,2])->false 

                                 7T
                   /      /                \         \           
                -5/   -3 /               -4 \      -7 \
                 /      /                    \         \
                2F     4                      3         0T
                   -3 /  \-4                  |-3
                    1F   0T                   0T
               
T-True
F-False

canSume(7,[2,4])

               7F
        -2  /       \-4
           5F        3F
       -2/   \-4     |-2
         3F   1F     1F
         |-2
         1F
 

           */

const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) return true;
  }

  return false;
};
/* 
In worst case the length of the tree will be m i.e.target sum
if we have a array element as 1

time complexity(O(n^m))) m-target sum || n-number of elements in array 
space complexity :O(m)
*/

console.log(canSum(7, [2, 4]));
console.log(canSum(7, [5, 3, 4, 7]));
//console.log(canSum(300, [7, 14]));

const canSumWithMemoization = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  if (targetSum in memo) return memo[targetSum];
  for (let num of numbers) {
    const remainder = targetSum - num;

    if (canSumWithMemoization(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSumWithMemoization(7, [2, 4]));
console.log(canSumWithMemoization(7, [5, 3, 4, 7]));
console.log(canSumWithMemoization(300, [7, 14]));
/*
Time :O(m*n)
space:O(m)
*/
