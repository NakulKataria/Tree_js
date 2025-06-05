/*Given the root of a binary tree, invert the tree, and return its root.*/

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root)return null;
    [root.left,root.right]=[root.right, root.left];
    invertTree(root.left);
    invertTree(root.right);

    return root;
    
};

// Time Complexity: O(n), where n is the number of nodes in the tree, as we visit each node once.
// Space Complexity: O(h), where h is the height of the tree, due to the recursion stack. In the worst case (unbalanced tree), this can be O(n).
// In a balanced tree, the height is O(log n), so the space complexity would be O(log n).
//approach: Recursive approach to swap left and right children of each node in the tree.
// The function uses a depth-first search (DFS) strategy to traverse the tree and invert it in place.