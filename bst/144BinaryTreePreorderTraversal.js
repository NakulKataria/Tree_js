/*Given the root of a binary tree, return the preorder traversal of its nodes' values.*/
function preorderTraversal(root) {
    if (!root) return [];
    
    let stack = [root], result = [];

    while (stack.length > 0) {
        let node = stack.pop();
        result.push(node.val);
        
        if (node.right) stack.push(node.right); 
        if (node.left) stack.push(node.left);   
    }
    
    return result;
}

// Time Complexity: O(n), where n is the number of nodes in the binary tree. Each node is visited exactly once.
// Space Complexity: O(n), where n is the number of nodes in the binary tree. The stack can hold all nodes in the worst case (e.g., a skewed tree). 
// Approach: The function uses an iterative depth-first search (DFS) strategy to traverse the binary tree in a preorder manner.
// It initializes a stack with the root node and an empty result array. 
// In each iteration, it pops a node from the stack, adds its value to the result array, and pushes its right and left children onto the stack. 
// The order of pushing right before left ensures that the left child is processed first, maintaining the preorder traversal order (root-left-right).
// The function is efficient and straightforward, leveraging a stack to explore the tree structure and collect node values in the correct order.
// The function is designed to handle various tree structures, including balanced and unbalanced trees, and efficiently collects node values in a single traversal. 
// The final result is returned as an array of node values in preorder traversal order. 
// The function can be easily adapted for recursive traversal, but the iterative approach is often preferred for preorder traversal to avoid deep recursion issues in large trees.  
// The function is particularly useful for problems where tree structure and node values need to be processed in a specific order, such as in tree-based algorithms or data structures. 
// The function can also be used in scenarios where preorder traversal is required for tasks like generating lists of nodes, constructing trees, or analyzing tree structures.  
// The function is designed to be efficient and straightforward, making it suitable for various applications in tree processing and analysis.
// The function can be tested with various binary tree structures to ensure correctness and efficiency in preorder traversal.   
// The function can be used in conjunction with other tree traversal functions to perform complex operations on binary trees, such as searching, inserting, or deleting nodes.  
// The function can be easily adapted for different tree structures, such as binary search trees or general trees, by modifying the traversal logic if needed.  
// The function can also be extended to handle additional requirements, such as filtering nodes based on specific criteria or collecting additional information during traversal.
// The function is versatile and can be integrated into larger tree processing algorithms or used as a standalone utility for preorder traversal tasks. 
// The function can be used in various applications, such as generating output in a specific sequence, constructing trees from node values, or processing tree-based data structures.
// The function can be optimized further if needed, but the current implementation is efficient for most practical scenarios involving binary trees.