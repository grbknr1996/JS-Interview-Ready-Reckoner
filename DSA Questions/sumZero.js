//checking the sum zero -Problem 1
//[-5,-4,-3.-2,0,4,6,8]->input
//[?,?]->output

//first sort the array

function getSumPairZero(array) {
  for (let number of array) {
    for (let j = 1; j < array.length; j++) {
      if (number + array[j] === 0) {
        return [number, array[j]];
      }
    }
  }
}

const result = getSumPairZero([-5, -4, -3 - 2, 0, 4, 6, 8]);

console.log(result);

//o(n2)

//Solution 2
//Optimized solutions
//[-5, -4, -3, -2, 0, 2, 4, 6, 8]
//  |                          |
//  L                          R
// IF l+r>0 then shift R--
//[-5, -4, -3, -2, 0, 2, 4, 6, 8]
//  |                       |
//  L                       R
//[-5, -4, -3, -2, 0, 2, 4, 6, 8]
//  |                    |
//  L                    R
//IF l+<0 then shift l++
//[-5, -4, -3, -2, 0, 2, 4, 6, 8]
//      |                      |
//      L                      R

function FindSumPair(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    sum = array[left] + array[right];

    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const soln = FindSumPair([-5, -4, -3 - 2, 0, 4, 6, 8]);

console.log(soln);

//O(N)
