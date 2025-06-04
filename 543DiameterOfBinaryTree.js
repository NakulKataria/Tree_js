/*Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them */
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

var diameterOfBinaryTree = function(root) {
   let diameter=0;
   
   function dfs(root) {
   if (!root) return 0;

   let left=dfs(root.left);    
   let right=dfs(root.right);
   diameter= Math.max(diameter, left+right);
   return 1 + Math.max(left,right);  
}
dfs(root);
return diameter;    
};
// Time Complexity: O(n), where n is the number of nodes in the tree, as we visit each node once.
// Space Complexity: O(h), where h is the height of the tree, due to the recursion stack. In the worst case (unbalanced tree), this can be O(n).
// In a balanced tree, the height is O(log n), so the space complexity would be O(log n).
// Approach: The function uses a depth-first search (DFS) strategy to traverse the tree and calculate the diameter.
// The function maintains a global variable `diameter` to keep track of the maximum diameter found during the traversal.
// The `dfs` function calculates the depth of each subtree and updates the diameter by considering the sum of the left and right subtree depths at each node.
// The base case is when the node is null, in which case the depth is 0.
// The function returns 1 plus the maximum of the depths of the left and right subtrees, effectively counting the current node in the depth calculation.
// The function is efficient and straightforward, leveraging recursion to explore the tree structure and calculate the diameter.
// The final result is returned as the value of the `diameter` variable, which represents the length of the longest path between any two nodes in the tree.
// The function is designed to handle various tree structures, including balanced and unbalanced trees, and efficiently computes the diameter in a single traversal.

