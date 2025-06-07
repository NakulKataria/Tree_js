/*Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.*/
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    //will use morris traversal to save some space 
    let curr = root;
    while(curr){
        if(curr.left){
            let prev= curr.left;
            while(prev.right!==null){
                prev= prev.right;
            }
            prev.right=curr.right;
            curr.right=curr.left;
            curr.left=null;
        }
        curr=curr.right;
    }
    
};
//first intution to find out the pre order and then use that result to change the  left and right according to it, as it is preoder required we also need not to change the root and in reut of pre oder i will store refrence rather the value lets see if it works
//second thought first i find the predesesoor of current node links its right to nodes right and link the left of node to right, do this until left and right are null

// Time Complexity: O(n), where n is the number of nodes in the binary tree. Each node is visited exactly once.
// Space Complexity: O(1), as the algorithm modifies the tree in place without using any additional data structures.
// Approach: The function uses a modified Morris traversal technique to flatten the binary tree in place.
// It iterates through the tree, and for each node, it checks if it has a left child. If it does, it finds the rightmost node of the left subtree (the predecessor) and connects it to the right child of the current node. Then, it moves the left child to the right and sets the left child to null.
// This effectively flattens the tree into a linked list where each node's right pointer points to the next node in pre-order traversal, and the left pointer is always null.
// The algorithm ensures that the tree structure is modified in place, maintaining the original node values and relationships while transforming the tree into a linked list format.
// The function does not return anything, as it modifies the tree in place.
// The final result is a flattened binary tree represented as a linked list, which can be traversed using the right pointers.
// The function is efficient and works well for large trees, ensuring that the time complexity remains linear with respect to the number of nodes in the tree.
// The function `flatten` transforms a binary tree into a linked list in-place, following the pre-order traversal order.
// It uses a modified Morris traversal technique to achieve this without using additional space for a stack or recursion.