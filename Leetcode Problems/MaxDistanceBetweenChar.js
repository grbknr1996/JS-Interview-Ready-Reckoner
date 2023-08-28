/*
Write a method to find the max. distance between two occurrences of a char in a string
Example 1:

SearchLetter(“my name is granar”, “a”);
a=>m,e,i,s,g,r,n(7) =>a
Output : 7 (i.e. m,e,i,s,g,r,n)

Example 2:

SearchLetter(“the capital of minnesota is saint paul”, “y”);

Output : -1 (no. occurrence of “y”)

Example 3:

SearchLetter(“quick brown fox jumps over the lazy dog”, “a”);

Output : -1 (only 1 occurrence of “a”)
*/

const maxDistanceBetweenChar = (str, c) => {
  str = str.replace(/ /g, "");

  let ipos = str.indexOf(c);
  let fpos = str.lastIndexOf(c);
  if (ipos === fpos) {
    return -1;
  } else {
    let l = str.substring(ipos + 1, fpos).length - 1;

    return l;
  }
};

console.log(maxDistanceBetweenChar("my name is granar", "a"));
console.log(
  maxDistanceBetweenChar("quick brown fox jumps over the lazy dog", "a")
);
