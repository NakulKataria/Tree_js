/*Given the root of a binary tree, return the postorder traversal of its nodes' values.*/
function postorderTraversal(root) {
    if (!root) return [];

    let stack = [root];
    let result = [];

    while (stack.length > 0) {
        let node = stack.pop();
        result.push(node.val);

        if (node.left) stack.push(node.left);  
        if (node.right) stack.push(node.right); 
    }

    return result.reverse(); // Reverse to get postorder (left-right-root)
}
// Time Complexity: O(n), where n is the number of nodes in the binary tree. Each node is visited exactly once.
// Space Complexity: O(n), where n is the number of nodes in the binary tree. The stack can hold all nodes in the worst case (e.g., a skewed tree).
// Approach: The function uses an iterative depth-first search (DFS) strategy to traverse the binary tree in a postorder manner.
// It initializes a stack with the root node and an empty result array.
// In each iteration, it pops a node from the stack, adds its value to the result array, and pushes its left and right children onto the stack.
// After the traversal, the result array is reversed to obtain the postorder sequence (left-right-root).
// The function is efficient and straightforward, leveraging a stack to explore the tree structure and collect node values in the correct order.    
// The function is designed to handle various tree structures, including balanced and unbalanced trees, and efficiently collects node values in a single traversal. 
// The final result is returned as an array of node values in postorder traversal order.    
// The function can be easily adapted for recursive traversal, but the iterative approach is often preferred for postorder traversal to avoid deep recursion issues in large trees.


function postorderTraversal(root) {
    let result =[];
    function dfs(root){
        if(!root) return;
        dfs(root.left);
        dfs(root.right);
        result.push(root.val)
        return;
    }
    dfs(root);
    return result;
}
// Time Complexity: O(n), where n is the number of nodes in the binary tree. Each node is visited exactly once. 
// Space Complexity: O(h), where h is the height of the tree. This is due to the recursion stack. In the worst case (unbalanced tree), this can be O(n).
// Approach: The function uses a depth-first search (DFS) strategy to traverse the binary tree in a postorder manner.
// It defines a helper function `dfs` that recursively visits the left subtree, then the right subtree, and finally processes the current node (by adding its value to the result array).
// The main function initializes an empty result array and calls the `dfs` function starting from the root of the tree.     
// The result array is returned at the end, containing the values of the nodes in postorder traversal.  
// The function is efficient and straightforward, leveraging recursion to explore the tree structure and collect node values in the correct order.  
// The function is designed to handle various tree structures, including balanced and unbalanced trees, and efficiently collects node values in a single traversal. 
// The final result is returned as an array of node values in postorder traversal order.    
// The function is suitable for various applications, such as generating lists of nodes in postorder for tree processing or analysis.   
// The function can be easily adapted for iterative traversal using a stack if needed, but the recursive approach is often more concise and easier to understand for postorder traversal.
// The function is particularly useful for problems where tree structure and node values need to be processed in a specific order, such as in tree-based algorithms or data structures.
// The function can also be used in scenarios where postorder traversal is required for tasks like deleting nodes, evaluating expressions represented by trees, or generating output in a specific sequence.
// The function is designed to be efficient and straightforward, making it suitable for various applications in tree processing and analysis.
// The function can be easily adapted for different tree structures, such as binary search trees or general trees, by modifying the traversal logic if needed.
// The function can also be extended to handle additional requirements, such as filtering nodes based on specific criteria or collecting additional information during traversal.   
// The function is versatile and can be integrated into larger tree processing algorithms or used as a standalone utility for postorder traversal tasks.
// The function can be tested with various binary tree structures to ensure correctness and efficiency in postorder traversal.  
// The function can be used in conjunction with other tree traversal functions to perform complex operations on binary trees, such as searching, inserting, or deleting nodes.  
// The function can also be optimized further if needed, depending on specific use cases or constraints, such as memory usage or performance requirements.