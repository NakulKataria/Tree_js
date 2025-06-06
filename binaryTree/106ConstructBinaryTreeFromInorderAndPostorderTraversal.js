/*Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
 const indexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        indexMap.set(inorder[i], i);
    }

    let postIndex = postorder.length - 1;

    const build = (left, right) => {
        if (left > right) return null;

        const val = postorder[postIndex--];
        const node = new TreeNode(val);
        const idx = indexMap.get(val);

        // Build right subtree first, because postorder pops from the end
        node.right = build(idx + 1, right);
        node.left = build(left, idx - 1);

        return node;
    };

    return build(0, inorder.length - 1);
};

// Time Complexity: O(n)
// Space Complexity: O(n) for the index map and recursion stack 
// where n is the number of nodes in the tree.
// This solution efficiently reconstructs the binary tree using the properties of inorder and postorder traversals.
// It uses a map to quickly find the index of each value in the inorder array, and recursively builds the tree from the postorder array.
// The right subtree is built first because the last element in postorder corresponds to the root of the current subtree, and we need to process the right child before the left child.
// The function returns the root of the constructed binary tree.
// This approach ensures that the tree is built correctly according to the given traversals.
// The solution is efficient and handles the constraints of the problem well, ensuring that the tree is constructed in O(n) time with O(n) space complexity.
// The function `buildTree` constructs a binary tree from the given inorder and postorder traversal arrays.
// It uses a recursive helper function `build` to construct the tree by finding the root from the postorder array and using the index map for quick lookups in the inorder array.
// The function returns the root of the constructed binary tree, which can be used for further operations or traversals.
// The solution is optimal for the problem and handles edge cases, such as empty trees, gracefully by returning null when the input arrays are empty.
// The use of a map allows for efficient index lookups, and the recursive approach ensures that the tree is built correctly according to the properties of inorder and postorder traversals.

