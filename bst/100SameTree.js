/*Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let ans = true;
    function dfs(p,q){
        if (!p && !q) return; // Both null – OK
        if (!p || !q) {       // One null – mismatch
            ans = false;
            return;
        }
        if (p.val!== q.val){
            ans= false;
            return null;
        } 
        dfs(p.left, q.left);
        dfs(p.right, q.right);
       return null;
    }
    dfs(p,q)
    return ans;
};
// Time Complexity: O(n), where n is the number of nodes in the trees, as we visit each node once.
// Space Complexity: O(h), where h is the height of the trees, due to the recursion stack. In the worst case (unbalanced tree), this can be O(n).
// In a balanced tree, the height is O(log n), so the space complexity would be O(log n).
// Approach: The function uses a depth-first search (DFS) strategy to traverse both trees simultaneously.
// It checks if both nodes are null (indicating a match), if one is null (indicating a mismatch), and if the values of the nodes are equal.
// If all checks pass, it recursively checks the left and right subtrees.  
// The function maintains a global variable `ans` to keep track of whether the trees are the same.
// The final result is returned as the value of the `ans` variable, which indicates whether the trees are structurally identical and have the same node values.
// The function is designed to handle various tree structures, including balanced and unbalanced trees, and efficiently checks for structural and value equality in a single traversal.
// The function is efficient and straightforward, leveraging recursion to explore the tree structure and compare nodes.
