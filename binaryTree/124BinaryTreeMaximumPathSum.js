/*A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.*/


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
var maxPathSum = function(root) {
    let maxSum = -Infinity;

    function maxGain(node) {
        if (!node) return 0;

        // Get max gain from left and right, discard negatives
        let leftGain = Math.max(maxGain(node.left), 0);
        let rightGain = Math.max(maxGain(node.right), 0);

        // Max path through this node
        let currentMax = node.val + leftGain + rightGain;

        // Update global max sum
        maxSum = Math.max(maxSum, currentMax);

        // Return max one-side path to parent
        return node.val + Math.max(leftGain, rightGain);
    }

    maxGain(root);
    return maxSum;
};

// time complexity: O(n) where n is the number of nodes in the tree, as we visit each node exactly once.    
// space complexity: O(h) where h is the height of the tree, due to the recursion stack in the worst case (skewed tree).    
// This solution calculates the maximum path sum in a binary tree using a recursive helper function that computes the maximum gain from each node.  
// The helper function returns the maximum gain from the current node to its parent, while also updating a global variable to keep track of the maximum path sum found so far.  
// The overall time complexity is O(n) and the space complexity is O(h), making it efficient for large trees.   
// The solution is optimal for the problem and handles edge cases, such as trees with negative values, gracefully by allowing the maximum path to be negative if all nodes are negative.    
// The recursive nature of the solution allows for a clear and concise implementation, making it easy to understand and maintain.   
// The solution effectively determines the maximum path sum by leveraging the properties of tree structure, ensuring that the path can start and end at any node in the tree.   
// The implementation is straightforward, with clear variable names and a logical flow, making it accessible for developers of varying experience levels.   
// The solution can be further optimized for space by using an iterative approach with a stack, but the current implementation is efficient and clear for general cases.    
// The recursive helper function is well-structured, with clear base cases and recursive calls that ensure the maximum gain is calculated correctly.    
// The solution is a good example of how to leverage recursion to solve problems related to tree structures, making it a valuable reference for similar problems in data structures and algorithms. 
// The implementation is also flexible, allowing for easy modifications if additional features or constraints are introduced in the problem statement.  
// The solution can be tested with various test cases, including edge cases like trees with all negative values or single-node trees, to ensure its correctness and robustness. 

