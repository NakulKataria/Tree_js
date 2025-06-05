/*Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.*/

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
 * @return {boolean}
 */
var isValidBST = function(root) {
        return valid(root, -Infinity, Infinity);
    };

    /**
     * @param {TreeNode} node
     * @param {number} left
     * @param {number} right
     */
     function valid(node, left, right) {
        if (node === null) {
            return true;
        }
        if (!(left < node.val && node.val < right)) {
            return false;
        }
        return valid(node.left, left, node.val) &&
              valid(node.right, node.val, right);
    }

// Time Complexity: O(n), where n is the number of nodes in the tree, as we visit each node once.   
// Space Complexity: O(h), where h is the height of the tree, due to the recursion stack. In the worst case (skewed tree), this can be O(n).        
// Approach: Depth First Search (DFS)   
// We perform a depth-first search (DFS) traversal of the binary tree. For each node, we check if its value is within the valid range defined by its ancestors. The left child must be less than the current node's value, and the right child must be greater than the current node's value. We recursively check both left and right subtrees, updating the valid range accordingly.  
// This way, we ensure that all nodes in the tree satisfy the properties of a binary search tree (BST). 
// The use of recursion allows us to traverse the tree efficiently while maintaining the constraints of a BST. This solution is both clear and concise, making it easy to understand and implement. 
// The function returns true if the tree is a valid BST and false otherwise.    
// This solution efficiently checks the validity of the binary search tree while maintaining a clear and concise structure.    
// Note: The function `valid` is a helper function that checks the validity of the BST for a given node and its valid range defined by `left` and `right`. It returns true if the node is null (base case), checks if the current node's value is within the valid range, and recursively checks the left and right subtrees with updated ranges.   
// The main function `isValidBST` initializes the validation process by calling the helper function with the root node and the initial valid range of negative infinity to positive infinity.    
