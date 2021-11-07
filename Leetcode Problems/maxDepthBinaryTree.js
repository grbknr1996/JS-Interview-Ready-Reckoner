/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along 
the longest path from the root node down to the farthest leaf node.

        3
       / \
      9  20
        /  \
       15  7
        
Input: root = [3,9,20,null,null,15,7]
Output: 3     

Example 2:

Input: root = [1,null,2]
Output: 2
Example 3:

Input: root = []
Output: 0
Example 4:

Input: root = [0]
Output: 1
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var maxDepth = function (root) {
  let maxDepth = 0;
  let DFS = (node, level) => {
    if (node === null) return;
    if (level > maxDepth) {
      maxDepth = level;
    }
    DFS(node.left, level + 1);
    DFS(node.right, level + 1);
  };
  DFS(root, 1);
  return maxDepth;
};

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxDepth(root));
