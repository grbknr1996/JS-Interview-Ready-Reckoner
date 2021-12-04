/*
Write a function allConstruct(target,worldBank)
that accepts a target string and an array of strings

The function should return a 2d array containing all 
of the ways that the target can be constructed by concatenating 
elements of wordBank array
*/

const allConstruct = (target, wordBank) => {
  if (target === "") return [[]];

  let result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  return result;
};
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl", "e"]));

const memoAllConstruct = (target, wordBank, memo = {}) => {
  if (target === "") return [[]];
  if (target in memo) return memo[target];
  let result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = memoAllConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};
console.log(
  memoAllConstruct("purple", ["purp", "p", "ur", "le", "purpl", "e"])
);

//allConstrut complexity
//m=target.length
//n=wordBank.length
//time: O(n^m)
//space: O(m)
