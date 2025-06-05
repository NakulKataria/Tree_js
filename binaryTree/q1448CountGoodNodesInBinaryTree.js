/*Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.*/


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
var goodNodes = function(root) {
    if (!root) return 0;

    let count = 0;
    // Stack will hold pairs: [node, maxSoFar]
    let stack = [[root, root.val]];

    while (stack.length > 0) {
        const [node, maxSoFar] = stack.pop();

        if (node.val >= maxSoFar) count++;

        const newMax = Math.max(maxSoFar, node.val);

        if (node.right) stack.push([node.right, newMax]);
        if (node.left) stack.push([node.left, newMax]);
    }

    return count;
};

// Time Complexity: O(n), where n is the number of nodes in the tree, as we visit each node once.
// Space Complexity: O(n), in the worst case, the stack can hold all nodes at the last level of the tree, which is O(n) in a complete binary tree.  
// Approach: Depth First Search (DFS)   
// We perform a depth-first search (DFS) traversal of the binary tree using a stack. For each node, we check if its value is greater than or equal to the maximum value encountered on the path from the root to that node. If it is, we increment our count of good nodes. We then update the maximum value for the path and continue traversing the left and right children of the current node.  
// This way, we ensure that we count all good nodes in the binary tree. 
// The use of a stack allows us to implement the DFS iteratively, avoiding recursion and potential stack overflow issues for very deep trees.
// This solution efficiently counts the good nodes in the binary tree while maintaining a clear and concise structure.
//moving down is better and intutive than level wise traversal for this problem as we are interested in the path from root to each node, not just the nodes at a particular level. however with coustum logic we can apply bfs also
