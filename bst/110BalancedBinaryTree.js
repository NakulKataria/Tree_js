/*Given a binary tree, determine if it is height-balanced.A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.*/
  /* function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let ans= true;
    function dfs(root){
        if (!root) return 0;
        let left = dfs(root.left);
        let right= dfs(root.right);
        if(Math.abs(left- right)>1) {
             ans= false;
             return;
        } 
        return 1 + Math.max(left,right);
    }
     dfs(root);
     return ans;
};
// Time Complexity: O(n), where n is the number of nodes in the tree, as we visit each node once.
// Space Complexity: O(h), where h is the height of the tree, due to the recursion stack. In the worst case (unbalanced tree), this can be O(n).
// In a balanced tree, the height is O(log n), so the space complexity would be O(log n).
// Approach: The function uses a depth-first search (DFS) strategy to traverse the tree and check if it is height-balanced.
// The function maintains a global variable `ans` to keep track of whether the tree is balanced.
// The `dfs` function calculates the depth of each subtree and checks the balance condition by comparing the depths of the left and right subtrees at each node.
// The base case is when the node is null, in which case the depth is 0.
// The function returns 1 plus the maximum of the depths of the left and right subtrees, effectively counting the current node in the depth calculation.
// If the balance condition is violated (i.e., the absolute difference between left and right subtree depths is greater than 1), it sets `ans` to false and returns immediately.
// The function is efficient and straightforward, leveraging recursion to explore the tree structure and check for balance.
// The final result is returned as the value of the `ans` variable, which indicates whether the tree is height-balanced.
// The function is designed to handle various tree structures, including balanced and unbalanced trees, and efficiently checks the balance condition in a single traversal.
