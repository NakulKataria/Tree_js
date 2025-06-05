/*Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.*/
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
var maxDepth = function(root) {
   if (!root) return 0;

   let left=maxDepth(root.left);    
   let right=maxDepth(root.right);

   return 1 + Math.max(left,right);  
};
// Time Complexity: O(n), where n is the number of nodes in the tree, as we visit each node once.
// Space Complexity: O(h), where h is the height of the tree, due to the recursion stack. In the worst case (unbalanced tree), this can be O(n).
// In a balanced tree, the height is O(log n), so the space complexity would be O(log n).
// Approach: Recursive approach to calculate the maximum depth of the binary tree.
// The function uses a depth-first search (DFS) strategy to traverse the tree and calculate the depth by comparing the depths of the left and right subtrees.
// The base case is when the node is null, in which case the depth is 0.
// The function returns 1 plus the maximum of the depths of the left and right subtrees, effectively counting the current node in the depth calculation.
// The function is efficient and straightforward, leveraging recursion to explore the tree structure.   
