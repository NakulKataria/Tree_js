/*Given the root of a binary tree, return the maximum width of the given tree.

The maximum width of a tree is the maximum width among all levels.

The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

It is guaranteed that the answer will in the range of a 32-bit signed integer*/
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
var widthOfBinaryTree = function(root) {
      if (!root) return 0;

    // Queue stores pairs: [node, index]
    let queue = [[root, 0]];
    let maxWidth = 0;

    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelStartIndex = queue[0][1]; // normalize index to prevent overflow
        let first = 0, last = 0;

        for (let i = 0; i < levelSize; i++) {
            let [node, index] = queue.shift();
            index -= levelStartIndex; // Normalize index
            if (i === 0) first = index;
            if (i === levelSize - 1) last = index;

            if (node.left) queue.push([node.left, 2 * index]);
            if (node.right) queue.push([node.right, 2 * index + 1]);
        }

        maxWidth = Math.max(maxWidth, last - first + 1);
    }

    return maxWidth;
};
// Time Complexity: O(n)
// Space Complexity: O(n) for the queue
// This solution efficiently calculates the maximum width of a binary tree by performing a level-order traversal using a queue.
// It keeps track of the indices of nodes at each level, normalizing them to prevent overflow.
// The width of each level is determined by the difference between the first and last indices of non-null nodes, plus one.
// The maximum width is updated at each level, ensuring that the solution is optimal and handles all edge cases.
// The function returns the maximum width of the binary tree, which can be used for further analysis or operations.
// The solution is efficient and works well for large trees, ensuring that the time complexity remains linear with respect to the number of nodes in the tree.
// The function `widthOfBinaryTree` calculates the maximum width of a binary tree.
// It uses a level-order traversal approach with a queue to keep track of nodes and their indices at each level.