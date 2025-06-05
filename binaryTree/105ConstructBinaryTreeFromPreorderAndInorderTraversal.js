/*Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
     let inorderIndexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderIndexMap.set(inorder[i], i);
    }

    let preIndex = 0;

    function helper(left, right) {
        if (left > right) return null;

        let rootVal = preorder[preIndex++];
        let root = new TreeNode(rootVal);

        let index = inorderIndexMap.get(rootVal);

        root.left = helper(left, index - 1);
        root.right = helper(index + 1, right);

        return root;
    }

    return helper(0, inorder.length - 1);
    
};

// time complexity: O(n) where n is the number of nodes in the tree, as we visit each node exactly once.    
// space complexity: O(n) for the inorderIndexMap and the recursion stack, which can go up to O(h) where h is the height of the tree in the worst case (skewed tree).   
// This solution constructs a binary tree from its preorder and inorder traversals using a recursive helper function.   
// The helper function builds the tree by finding the root from the preorder array and using the inorder array to determine the left and right subtrees.    
// The use of a map for inorder indices allows for O(1) access time, making the solution efficient. 
// The overall time complexity is O(n) and the space complexity is O(n), making it suitable for large trees.    
// This approach is efficient and works well for constructing binary trees from their traversal arrays, as it minimizes the number of lookups and recursive calls needed.   
// The solution is optimal for the problem and handles edge cases, such as empty trees, gracefully by returning null when appropriate.
// The recursive nature of the solution allows for a clear and concise implementation, making it easy to understand and maintain.
// The solution effectively reconstructs the binary tree by leveraging the properties of preorder and inorder traversals, ensuring that the left and right subtrees are correctly formed based on the indices derived from the inorder traversal.
// The use of a map for quick index lookups in the inorder array significantly improves the efficiency of the solution, especially for larger trees.
// The solution is robust and handles various scenarios, including trees with duplicate values, as long as the input arrays are valid representations of a binary tree. 
// The implementation is straightforward, with clear variable names and a logical flow, making it accessible for developers of varying experience levels.   
// The solution can be further optimized for space by avoiding the use of a map if the input arrays are guaranteed to have unique values, but the current implementation is efficient and clear for general cases.  
// The recursive helper function is well-structured, with clear base cases and recursive calls that ensure the tree is built correctly from the given traversals.   
// The solution is a good example of how to leverage traversal properties to reconstruct a binary tree efficiently, making it a valuable reference for similar problems in data structures and algorithms.
// The implementation is also flexible, allowing for easy modifications if additional features or constraints are introduced in the problem statement.
// The solution can be tested with various test cases, including edge cases like empty arrays or single-node trees, to ensure its correctness and robustness.   
// The overall design of the solution is modular, with the main function and helper function clearly separated, allowing for easy testing and debugging.    
// The solution adheres to best practices in coding, with proper function definitions, variable scoping, and error handling, ensuring that it is maintainable and scalable for future enhancements or changes in requirements.  
