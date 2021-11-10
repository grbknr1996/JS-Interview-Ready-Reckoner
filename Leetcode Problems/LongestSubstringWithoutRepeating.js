const longestSubsetWithoutRepeating = (s) => {
  var letters = s.split("");
  var result = new Map();
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    if (!result.has(letters[i])) {
      result.set(letters[i], i);
      console.log(result);
    } else {
      i = result.get(letters[i]);
      result.clear();
    }
    if (maxLen < result.size) {
      maxLen = result.size;
    }
  }
  return maxLen;
};
console.log(longestSubsetWithoutRepeating("wpwkew"));
