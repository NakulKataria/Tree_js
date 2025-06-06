/*Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
    if (root.val == p.val || root.val == q.val) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left == null) return right;
    if (right == null) return left;
    return root;
    
};
// Time Complexity: O(n)
// Space Complexity: O(h) where h is the height of the tree, due to the recursion stack.

// This solution efficiently finds the lowest common ancestor by recursively traversing the tree.
// It checks if the current node is either p or q, and if not, it recursively searches in the left and right subtrees.
// If both left and right calls return non-null, it means the current node is the LCA.
// If one of the calls returns null, it means both nodes are in the other subtree, so it returns the non-null result.
// This approach ensures that the solution is optimal and handles all edge cases, including when one or both nodes are not present in the tree.
// The function returns the lowest common ancestor node, which can be used for further operations or traversals.
// The solution is efficient and works well for large trees, ensuring that the time complexity remains linear with respect to the number of nodes in the tree.
// The function `lowestCommonAncestor` finds the lowest common ancestor of two nodes in a binary tree.
// It uses a recursive approach to traverse the tree, checking if the current node is either of the target nodes.