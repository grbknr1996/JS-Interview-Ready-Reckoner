const canConstruct = (target, wordBank) => {
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      //line returns patato.indexOf(pot)==>0
      const suffix = target.slice(word.length); //potato.slice(pot.length)==>ato
      if (canConstruct(suffix, wordBank) === true) {
        return true;
      }
    }
  }
  return false;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));

const canConstructMemoized = (target, wordBank, memo = {}) => {
  if (memo[target]) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      //line returns patato.indexOf(pot)==>0
      const suffix = target.slice(word.length); //potato.slice(pot.length)==>ato
      if (canConstructMemoized(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};
console.log(canConstructMemoized("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
