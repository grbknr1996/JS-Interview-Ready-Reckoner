//implementation combinations

//what is combinatorics?
//Field of math concerned with counting things.
//A Collection of things where the order doesnt matter
//[a,b,c] --what are all possible combinations
/*
    []
    [a]
    [b]
    [c]
    [a,b]
    [b,c]
    [a,c]
    [a,b,c]
Given a set of n things there are 2^n possible combinations
i.e. n=3 combination=2^3=8
                             []
  a                      /          \
                       []           [a]
  b                   /  \          /  \
                    []   [b]        [a]   [a,b]
  c                /  \  /  \       /\        /  \
                []   [c] [b] [b,c] [a] [a,c] [a,b][a,b,c]
*/

//Common questions:-
//Given N things, how many ways we can arrange them
//In how many ways can we do X?
//What is the shortest way to do Y?

const combinations = (elements) => {
  if (elements.length === 0) return [[]];
  const firstEl = elements[0];
  const rest = elements.slice(1);

  const combsWithoutFirst = combinations(rest);

  const combsWithFirst = [];

  combsWithoutFirst.forEach((comb) => {
    const combWithFirst = [...comb, firstEl];
    combsWithFirst.push(combWithFirst);
  });

  return [...combsWithoutFirst, ...combsWithFirst];
};

console.log(combinations([]));
console.log(combinations(["a", "b", "c"]));

//space complexity O(n^2)
//time complexity O(2^n)
