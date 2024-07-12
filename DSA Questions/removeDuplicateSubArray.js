function removeDuplicateSubArrays(arr) {
  // Create a Set to store unique sub-arrays as strings
  const seen = new Set();
  return arr.filter((subArray) => {
    const sortedSubArray = JSON.stringify(subArray.slice().sort());
    if (seen.has(sortedSubArray)) {
      return false;
    }
    seen.add(sortedSubArray);
    return true;
  });
}

// Example usage
const input = [
  [1, 2],
  [2, 1],
  [2, 3],
  [3, 2],
  [4, 2],
];
const output = removeDuplicateSubArrays(input);
console.log(output);
