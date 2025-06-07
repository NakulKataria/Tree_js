/*Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Design an algorithm that runs in less than O(n) time complexity*/
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
var countNodes = function(root) {
    if (!root) return 0;

    // Step 1: Get height
    let getHeight = (node) => {
        let h = 0;
        while (node.left) {
            h++;
            node = node.left;
        }
        return h;
    };

    const height = getHeight(root);
    if (height === 0) return 1;

    // Step 2: Check if node exists at index in last level using bit manipulation
    const exists = (index, height, node) => {
        let left = 0, right = Math.pow(2, height) - 1;
        for (let i = height - 1; i >= 0; i--) {
            let mid = Math.floor((left + right) / 2);
            if ((index & (1 << i)) === 0) {
                node = node.left;
                right = mid;
            } else {
                node = node.right;
                left = mid + 1;
            }
            if (!node) return false;
        }
        return true;
    };

    // Step 3: Binary search to find how many nodes are on last level
    let left = 0, right = Math.pow(2, height) - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (exists(mid, height, root)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // Total nodes = full nodes + last level nodes
    return Math.pow(2, height) - 1 + left;
}

// Time Complexity: O(log^2(n))
// Space Complexity: O(1) for the height and index calculations
// This solution efficiently counts the nodes in a complete binary tree by leveraging the properties of complete trees.
// It first calculates the height of the tree, then uses binary search to determine how many nodes exist at the last level.
// The `exists` function checks if a node exists at a given index in the last level using bit manipulation, ensuring that the solution runs in less than O(n) time complexity.
// The function returns the total number of nodes in the complete binary tree, which can be used for further analysis or operations.
// The solution is optimal for the problem and handles edge cases, such as empty trees, gracefully by returning 0 when the root is null.
// The function `countNodes` counts the number of nodes in a complete binary tree.


// It uses a combination of height calculation and binary search to efficiently determine the total number of nodes without traversing the entire tree, achieving a time complexity of O(log^2(n)).
// The solution is designed to run in less than O(n) time complexity, making it suitable for large trees.

// The use of bit manipulation allows for quick checks of node existence at specific indices in the last level, ensuring that the solution is both efficient and effective.
// The function returns the total count of nodes, which can be used for further operations or analysis of the tree structure.
// The implementation is clear and concise, with a logical flow that makes it easy to understand and maintain.
