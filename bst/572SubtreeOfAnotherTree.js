/*Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.*/
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root) return false;

    // If the current tree matches, return true
    if (isSameTree(root, subRoot)) return true;

    // Else, check left and right subtrees
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
// Time Complexity: O(m * n), where m is the number of nodes in the main tree (root) and n is the number of nodes in the subtree (subRoot).
// Space Complexity: O(h), where h is the height of the tree, due to the recursion stack. In the worst case (unbalanced tree), this can be O(m + n).   
// Approach: The function uses a recursive strategy to check if the subtree (subRoot) is present in the main tree (root).
// It first checks if the current node of the main tree matches the root of the subtree using the helper function `isSameTree`.
// If a match is found, it returns true. If not, it recursively checks the left and right subtrees of the main tree.
// The helper function `isSameTree` checks if two trees are identical by comparing their structure and node values.
// The function is efficient and straightforward, leveraging recursion to explore the tree structure and check for subtree presence.
// The function is designed to handle various tree structures, including balanced and unbalanced trees, and efficiently checks for subtree presence in a single traversal.
// The final result is returned as a boolean indicating whether the subtree exists within the main tree.
