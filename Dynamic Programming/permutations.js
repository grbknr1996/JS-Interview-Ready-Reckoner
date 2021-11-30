/*
    What is permutation?
    A collection of things where the order of things mattera

Possible permutaions [a,b,c]?

1.[c,b,a]
2.[b,c,a]
3.[b,a,c]
4.[c,a,b]
5.[a,c,b]
6.[a,b,c]

Possible permutation is n!
3!=1*2*3=6
                            []     
      a                     |
                           [a]
      b          /                    \       
            [b,a]                       [a,b]
c    /         |       \              /     |      \    
[c,b,a]     [b,c,a]   [b,a,c]     [c,a,b] [a,c,b]  [a,b,c]

*/
const permutations = (elements) => {
  if (elements.length === 0) return [[]];
  const firstEl = elements[0];
  const rest = elements.slice(1);

  const permsWithoutFirst = permutations(rest);

  const allPermutations = [];

  permsWithoutFirst.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
      allPermutations.push(permWithFirst);
    }
  });
  return allPermutations;
};
console.log(permutations(["a", "b", "c"]));
//Time(O(n!))
//Space(n*n)
