/*
Write a function countConstruct(tarhet,wordBank)
that accepts a target of Strings

The function should  erturn the number of ways that the target
can be constructed by concatinnating the wordBank array

cauntConstruct(abcdef,[ab,abc,cd,def,abcd])

            abcdef
(ab)   /  (abc)|     \abcd   
    cdef      def     ef
(cd) |    (def)|       
    ef         ''

*/
const countConstruct = (target, wordBank) => {
  if (target === "") return 1;
  let totalCount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      //.........N TIMES
      const suffix = target.slice(word.length);
      const numberOfWays = countConstruct(suffix, wordBank); //M TIMES
      totalCount += numberOfWays;
    }
  }
  return totalCount;
};
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

const countConstructMemo = (target, wordBank, memo = {}) => {
  if (memo[target]) return memo[target];
  if (target === "") return 1;
  let totalCount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numberOfWays = countConstruct(suffix, wordBank, memo);
      totalCount += numberOfWays;
    }
  }
  memo[target] = totalCount;
  return totalCount;
};
console.log(countConstructMemo("purple", ["purp", "p", "ur", "le", "purpl"]));

//Complecity
//N=LENGTH OF WORDBANK
//M=LENGTH OF TARGET
//time:O(N^M*M)
//SPACE:O(M^2)

//MEMOMOIXED
//TIME: O(N*M^2)
//SPACE:O(M^2)
