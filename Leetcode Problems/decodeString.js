/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], 
where the encoded_string inside the square brackets 
is being repeated exactly k times.
 Note that k is guaranteed to be a positive integer.

You may assume that the input string is always 
valid; No extra white spaces, square brackets 
are well-formed, etc.

Furthermore, you may assume that the original 
data does not contain any digits and that digits 
are only for those repeat numbers, k. 
For example, there won't be input like 3a or 2[4].

 

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
Example 4:

Input: s = "abc3[cd]xyz"
Output: "abccdcdcdxyz"
*/
/**
 * @param {string} s
 * @return {string}
 */

//k=how many times repeating
//[=how i start storing what i repeat
//]=better start repeating
const decodeString = (s) => {
  let multply = [];
  let tempMult = "";
  let repeatStr = [];
  let solution = "";
  for (let char of s) {
    if (!isNaN(char)) {
      tempMult = `${tempMult}${char}`; //'31'
    } else if (char === "[") {
      multply.push(tempMult); //[31,2]
      tempMult = "";

      repeatStr.push(solution); //[' ',a]
      solution = "";
    } else if (char === "]") {
      solution = repeatStr.pop() + solution.repeat(multply.pop());
    } else {
      solution += char; //a then its//c//acc
    }
  }
  return solution;
};

console.log(decodeString("3[a2[c]]"));

var URL = require("url").URL;
const myURL = new URL("https://gmail.com:8888");
console.log(myURL.port);
myURL.port = "443";
console.log(myURL.port);
myURL.port = 1234;
console.log(myURL.port);

console.log(myURL.href);

console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
Promise.resolve(3).then(console.log);
console.log(4);

try {
  const m = 1;
  const n = m + x;
  console.log(n);
} catch (error) {
  console.log(error.name);
}
