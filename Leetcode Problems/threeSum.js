/* 
Given an integer array nums, 
return all the triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k, 
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must 
not contain duplicate triplets.


Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

const e = require("express");

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let [solution, left, right] = [[], 0, nums.length - 1];
  if (nums.length < 3) return solution;
  nums.sort((a, b) => a - b);
  for (let [index, number] of nums.entries()) {
    if (number > 0) return solution;

    if (number === nums[index - 1]) continue;

    left = index + 1;
    right = nums.length - 1;
    let temp = 0;

    while (left < right) {
      temp = number + nums[left] + nums[right];
      if (temp === 0) {
        solution.push([number, nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] == nums[left - 1]) {
          left++;
        }

        while (left < right && nums[right] == nums[right + 1]) {
          right--;
        }
      } else if (temp > 0) {
        right--;
      } else if (temp < 0) {
        left++;
      }
    }
  }
  return solution;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
