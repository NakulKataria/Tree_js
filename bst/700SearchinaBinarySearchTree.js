/*You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.*/
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let node= root;
    while(node){
        if(node.val===val)return node;
        if(val>node.val)node=node.right;
        else node=node.left;
    }
    return null;
};

//time: O(h) where h is the height of the tree
// space: O(1) since we are not using any extra space
// This solution efficiently searches for a node in a binary search tree (BST) using an iterative approach.
// It starts from the root and traverses down the tree, comparing the target value with the current node's value.
// If the target value is equal to the current node's value, it returns that node.
// If the target value is greater, it moves to the right child; if less, it moves to the left child.
// If it reaches a null node, it means the target value is not present in the tree, and it returns null.
// This approach ensures that the search is efficient, taking advantage of the properties of BSTs where left children are less than the parent and right children are greater.
// The time complexity is O(h), where h is the height of the tree, and the space complexity is O(1) since no additional data structures are used.
// The function `searchBST` takes the root of a binary search tree and a target value, returning the subtree rooted at the node with that value or null if it does not exist.
