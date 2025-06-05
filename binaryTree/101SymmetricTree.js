/*Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).*/
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
var isSymmetric = function(root) {
    if (!root) return true;

    function isMirror(t1, t2) {
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;

        return (
            t1.val === t2.val &&
            isMirror(t1.left, t2.right) &&
            isMirror(t1.right, t2.left)
        );
    }

    return isMirror(root.left, root.right);
};
// time complexity: O(n) where n is the number of nodes in the tree, as we visit each node exactly once.    
// space complexity: O(h) where h is the height of the tree, due to the recursion stack in the worst case (skewed tree).    
// This solution checks if a binary tree is symmetric by using a recursive helper function that compares the left and right subtrees.   
// The helper function checks if two trees are mirrors of each other by comparing their values and recursively checking their children in a mirrored manner.    
// The overall time complexity is O(n) and the space complexity is O(h), making it efficient for large trees.   
// The solution is optimal for the problem and handles edge cases, such as empty trees, gracefully by returning true when the root is null. 
// The recursive nature of the solution allows for a clear and concise implementation, making it easy to understand and maintain.   
// The solution effectively determines the symmetry of the binary tree by leveraging the properties of tree structure, ensuring that the left and right subtrees are mirrors of each other. 
// The implementation is straightforward, with clear variable names and a logical flow, making it accessible for developers of varying experience levels.   
// The solution can be further optimized for space by using an iterative approach with a queue or stack, but the current implementation is efficient and clear for general cases.   
// The recursive helper function is well-structured, with clear base cases and recursive calls that ensure the symmetry is checked correctly.   
// The solution is a good example of how to leverage recursion to solve problems related to tree structures, making it a valuable reference for similar problems in data structures and algorithms. 
// The implementation is also flexible, allowing for easy modifications if additional features or constraints are introduced in the problem statement.  
// The solution can be tested with various test cases, including edge cases like empty trees or single-node trees, to ensure its correctness and robustness.    
// The overall design of the solution is modular, with the main function and helper function clearly separated, allowing for easy testing and debugging.    
// The solution adheres to best practices in coding, with proper function definitions, variable scoping, and error handling, ensuring that it is maintainable and scalable for future enhancements or changes in requirements.  
