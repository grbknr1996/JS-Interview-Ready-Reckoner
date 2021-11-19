const arr = [5, 1, 3, 2, 11, 5, 7, 8];

/*:::::Brute Force:::::
find the max subArray sum of size 3
current sum=1) 9=>5+1+3
2) 6=>1+3+2
3) 16=>3+2+11
4) 18=>2+11+5
5) 23=>11+5+7
6) 20=>5+7+8

max sum seen so far=9 ==>16 ==> 18 ==>23
*/
/* 
::::Sliding Window ::::
  ------
1) 5 1 3 2 11 5 7 8  === 9
        ||
        VV
     ------
2. 5 1 3 2 11 5 7 8  === 6
       ------
3. 5 1 3 2 11 5 7 8  === 16
         ------
4. 5 1 3 2 11 5 7 8  === 18
           ------
5. 5 1 3 2 11 5 7 8  === 23 ==>OUTPUT
              -----
6. 5 1 3 2 11 5 7 8  ===  20
*/

const maxSubArraySum = (nums, size) => {
  let currSum = 0;
  let maxSumSeen = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    currSum = currSum + nums[i];
    if (i >= size - 1) {
      maxSumSeen = Math.max(currSum, maxSumSeen);
      currSum = currSum - nums[i - (size - 1)]; //substruct 1 from 6 to make it sliding
    }
  }
  return maxSumSeen;
};
const arr1 = [1, 2, 3, 5, 4, 8, 6, 2];

console.log(maxSubArraySum(arr1, 3));

console.log(maxSubArraySum(arr, 3));
