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
      console.log("i=", i);
      result.clear();
    }
    if (maxLen < result.size) {
      maxLen = result.size;
    }
  }
  return maxLen;
};
console.log(longestSubsetWithoutRepeating("wpwkew"));

// const sliding = (s) => {
//   var letters = s.split("");
//   var maxLen = 0;
//   for (let i = 0; i < letters.length; i++) {}
// };
//For “ABDEFGABEF”, the longest substring are “BDEFGA” and “DEFGAB”, with length 6
