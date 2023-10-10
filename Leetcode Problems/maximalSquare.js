/*
Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.


Example 1:
 1 0  1 0 0
    ------
        ____
 1 0 |1| 1|1
 1 1 |1| 1|1
        ____
    -----  
 1 0 0 1 0


Input: matrix =[["1","0","1","0","0"],
                ["1","0","1","1","1"],
                ["1","1","1","1","1"],
                ["1","0","0","1","0"]]
Output: 4
Example 2:


Input: matrix = [["0","1"],["1","0"]]
Output: 1
Example 3:

Input: matrix = [["0"]]
Output: 0
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] is '0' or '1'.
*/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
/*
TL  T
L   BR
*/

function maximalSquare(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }

  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let maxSquareSize = 0;

  // Iterate through the matrix to find the largest square.
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (matrix[i][j] === "1") {
        let size = 1;
        let foundSquare = true;
        while (i + size < numRows && j + size < numCols && foundSquare) {
          // Check if the next larger square is also a square of ones.
          for (let k = i; k <= i + size; k++) {
            if (matrix[k][j + size] !== "1") {
              foundSquare = false;
              break;
            }
          }
          for (let k = j; k <= j + size; k++) {
            if (matrix[i + size][k] !== "1") {
              foundSquare = false;
              break;
            }
          }

          if (foundSquare) {
            size++;
          }
        }
        maxSquareSize = Math.max(maxSquareSize, size);
      }
    }
  }

  return maxSquareSize * maxSquareSize;
}

// Example usage:
const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];

console.log(maximalSquare(matrix)); // Output: 4
