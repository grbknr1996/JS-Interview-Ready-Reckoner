/*
Say thst you are a traveller on a 2d grid .
You begin in the top left corner and your goal is to
travel to the bottom right 
you may only move down or right
In how many ways can u travel to the goal on a grid with
m*n?
Write a function for gridTraveler(m,n) ?
gridTraveler(2,3)
       ||
       \/
------------------
|  S |     |     |
-------------------        
|    |     |   E |
-------------------

There are 3 ways to travel this grid:
1.right,right,down
2.right,down,right
3.down,right,right

gridTraveler(0,1)->0
gridTraveler(1,0)->0
gridTraveler(0,0)->0

gridTraveler(1,1)->1

                (2,3)
        Down /         \ Right
          (1,3)         (2,2)
         /     \        /       \   
     (0,3)   (1,2)    (1,2)      (2,1)
            /    \      /  \       /    \
        (0,2)   (1,1) (0,2) (1,1) (1,1)  (2,0)
           */
const gridTraveler = (m, n, memo = {}) => {
  //are the args in memo
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(18, 18));

//time -O(N)
//SPACE - O(N)

/**
 Memoization recipe:
 1.Make it work
    -visualize the problem as a tree
    -implement the tree using recursion..consider leaves as base case
    -test it
2.Make it efficient
    -add a memoo object
    -add a base case and return values
    -store return values  into the memo
 */
