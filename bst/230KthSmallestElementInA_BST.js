/*Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.*/
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
   
    let stack = [];
    let result = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        // Go to the leftmost node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        // Pop the node, process it, go to the right
        current = stack.pop();
        result.push(current.val);
        if(result.length===k){
            return current.val
        } 
        current = current.right;
    }

    return result[k-1];

};

//time complexity: O(n) where n is the number of nodes in the tree, as we may need to traverse all nodes in the worst case. 
//space complexity: O(h) where h is the height of the tree, as we use a stack to store nodes during traversal. In the worst case of a skewed tree, this can be O(n).
// This solution uses an iterative in-order traversal to find the kth smallest element in a binary search tree (BST).   
// The in-order traversal of a BST visits nodes in ascending order, so we can simply count the nodes visited until we reach the kth one.    
// This approach avoids the need to store all node values in an array, making it more space-efficient for large trees.
// The time complexity is O(n) in the worst case, where n is the number of nodes in the tree, and the space complexity is O(h), where h is the height of the tree.  
// This solution is efficient and works well for large binary search trees, as it only traverses the necessary nodes to find the kth smallest element.
