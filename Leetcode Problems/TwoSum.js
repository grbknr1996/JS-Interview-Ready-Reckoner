console.log("\nTwo Sum Problem\n");
/*
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

//Solutions

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let storage = {};
  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) {
      return [storage[num], index];
    }
    storage[target - num] = index;
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));

//METHOD-2
//TWO POINTER SOLN
var twoSum2 = (nums, target) => {
  let sortedNums = [...nums].sort((a, b) => a - b);
  let left = 0;
  let right = sortedNums.length - 1;
  while (left < right) {
    if (sortedNums[left] + sortedNums[right] == target) {
      break;
    } else if (sortedNums[left] + sortedNums[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return [nums.indexOf(sortedNums[left]), nums.indexOf(sortedNums[right])];
};
console.log("\nMethod-2\n");

console.log(twoSum2([3, 2, 4], 6));
