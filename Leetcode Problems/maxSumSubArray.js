/*
Given an integer array nums, find the 
subarray
with the largest sum, and return its sum.
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/

const maxSubArray1 = function (nums) {
  // Initialize the max sum...
  let maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
        maxSum = Math.max(maxSum, sum);
      }
    }
  }
  return maxSum;
};

console.log(maxSubArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
//console.log(maxSubArray1([-1]));

//APPROACH -2-WITH TWO LOOPS
const maxSubArray2 = function (nums) {
  // Initialize the max sum...
  let maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};
//3RD Approach
var maxSubArray = function (nums) {
  // Initialize the max sum...
  let maxSum = nums[0];
  // Traverse all the element through the loop...
  for (let i = 1; i < nums.length; i++) {
    // nums[i] represents the largest sum of all subarrays ending with index i...
    // then its value should be the larger one between nums[i]...
    // nums[i-1] + nums[i] (largest sum plus current number with using prefix)...
    // calculate nums[0], nums[1]…, nums[n] while comparing each one with current largest sum...
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    // if nums[i] > maxSum then maxSum = nums[i]...
    if (nums[i] > maxSum) maxSum = nums[i];
  }
  return maxSum; // return the contiguous subarray which has the largest sum...
};
