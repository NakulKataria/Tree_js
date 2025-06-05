/*Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
     // Ensure p is smaller than q
    if (p.val > q.val) [p, q] = [q, p];
    let node= root;
    while(node){
        if(node.val<p.val){
            node=node.right;
            
        }
        else if(node.val>q.val){
            node=node.left;
            
        }
        else return node;
    }
 return  null;
    
};
// time complexity: O(h), where h is the height of the tree, as we traverse down the tree to find the LCA.  
// space complexity: O(1), as we are not using any additional data structures that grow with the input size.
// approach: iterative approach to find the lowest common ancestor in a binary search tree (BST).   
// The function checks the value of the current node against the values of p and q to determine whether to traverse left or right in the tree.
// If the current node's value is less than both p and q, it moves to the right subtree; if greater, it moves to the left subtree.
// If the current node's value is between p and q, it is the lowest common ancestor, and the function returns that node.





var lowestCommonAncestor = function(root, p, q) {
    if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(root.right, p, q)
    } else if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left, p, q)
    } else {
        return root
    }
};
// time complexity: O(h), where h is the height of the tree, as we traverse down the tree to find the LCA.
// space complexity: O(h), due to the recursion stack, where h is the height of the tree.       
// approach: recursive approach to find the lowest common ancestor in a binary search tree (BST).
// The function checks the value of the current node against the values of p and q to determine whether to traverse left or right in the tree.

// If the current node's value is less than both p and q, it moves to the right subtree; if greater, it moves to the left subtree.
// If the current node's value is between p and q, it is the lowest common ancestor, and the function returns that node.
// The function is efficient and straightforward, leveraging the properties of BSTs to find the LCA without needing to traverse the entire tree.    



//pro tip :use p and q as actualobjects of tree node === compares address or refrence otherwise
