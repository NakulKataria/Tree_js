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
var inorderTraversal = function(root) {
       // using morris traversal
       let curr= root;
       let result=[];
       while(curr){
         if(!curr.left){
            result.push(curr.val);
            curr= curr.right;
         }else{
            let prev= curr.left;
            while(prev.right!==null && prev.right!==curr ){
                prev=prev.right;
            }
            if(prev.right===null){
                prev.right=curr;//make link
                curr=curr.left;
            }else{
                //prev.right===curr as while loop tabhi break hua kyok 2 m se koi ek condition false hui
                prev.right=null;//break link
                result.push(curr.val);
                curr=curr.right;
            }
         }

       }

       return result;
};

// Time Complexity: O(n), where n is the number of nodes in the binary tree. Each node is visited exactly once.
// Space Complexity: O(1), as no additional space is used except for the output array.
// Approach: The function implements Morris Traversal, which is an efficient way to perform inorder traversal without using a stack or recursion.
// It uses a temporary link (thread) to traverse the tree. The algorithm works as follows:
// 1. Start with the current node as the root.
// 2. If the current node has no left child, add its value to the result and move to the right child.
// 3. If the current node has a left child, find the rightmost node in the left subtree (the predecessor).
// 4. If the right child of the predecessor is null, create a link to the current node and move to the left child.
// 5. If the right child of the predecessor is already linked to the current node, remove the link, add the current node's value to the result, and move to the right child.
// This process continues until all nodes are visited.
// The result array is returned at the end, containing the values of the nodes in inorder traversal order.
// The Morris Traversal technique is particularly useful for inorder traversal as it allows the traversal to be done in O(n) time with O(1) space complexity, making it efficient for large trees.
// The function is designed to handle various tree structures, including balanced and unbalanced trees, and efficiently collects node values in a single traversal.
// The final result is returned as an array of node values in inorder traversal order.
// The function is suitable for various applications, such as generating sorted lists from binary search trees or processing tree structures in a specific order.
// The function can be easily adapted for other types of traversal (preorder, postorder) by modifying the order of operations, but the current implementation focuses on inorder traversal.
// The function is efficient and straightforward, leveraging the properties of Morris Traversal to explore the tree structure and collect node values in the correct order.
// The function is designed to handle various tree structures, including balanced and unbalanced trees, and efficiently collects node values in a single traversal.
// The final result is returned as an array of node values in inorder traversal order.
