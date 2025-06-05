/*Given the root of a binary tree, return the inorder traversal of its nodes' values.*/

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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
        let result = [];
        function dfs(root){
            if(!root) return;
            dfs(root.left);
            result.push(root.val);
            dfs(root.right);
            return;
        }
        dfs(root);
        return result;
};
// Time Complexity: O(n), where n is the number of nodes in the binary tree. Each node is visited exactly once.
// Space Complexity: O(h), where h is the height of the tree. This is due to the recursion stack. In the worst case (unbalanced tree), this can be O(n).
// Approach: The function uses a depth-first search (DFS) strategy to traverse the binary tree in an inorder manner.    
// It defines a helper function `dfs` that recursively visits the left subtree, processes the current node (by adding its value to the result array), and then visits the right subtree.    
// The main function initializes an empty result array and calls the `dfs` function starting from the root of the tree.
// The result array is returned at the end, containing the values of the nodes in inorder traversal.
// The function is efficient and straightforward, leveraging recursion to explore the tree structure and collect node values in the correct order.  
// The function is designed to handle various tree structures, including balanced and unbalanced trees, and efficiently collects node values in a single traversal.
// The final result is returned as an array of node values in inorder traversal order. 
// The function is suitable for various applications, such as generating sorted lists from binary search trees or processing tree structures in a specific order.   
// The function can be easily adapted for iterative traversal using a stack if needed, but the recursive approach is often more concise and easier to understand for inorder traversal.