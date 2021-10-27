/*
Given n pairs of parentheses, 
write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8
*/
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const solution = [];
  const generateCombo = (leftPCount, rightPCount, partial) => {
    if (leftPCount > rightPCount) return;
    if (!leftPCount && !rightPCount) solution.push(partial);
    if (leftPCount > 0)
      generateCombo(leftPCount - 1, rightPCount, partial + "(");
    if (rightPCount > 0)
      generateCombo(leftPCount, rightPCount - 1, partial + ")");
  };
  generateCombo(n, n, "");
  return solution;
};

//well formed perenthesis
//()
//((()))
//(()())
//()()()
console.log(generateParenthesis(3));
console.log(generateParenthesis(4));
