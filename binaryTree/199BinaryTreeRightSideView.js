/*Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.*/
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
var rightSideView = function(root) {
    if(!root) return [];
    let queue= [root],result=[];
    while(queue.length>0){
        let size = queue.length;
        let node;
        for(let i=0; i<size;i++){
            node=queue.shift();
            
            if(node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

        }
        result.push(node.val);
    }
    return result;
};

// Time Complexity: O(n), where n is the number of nodes in the tree, as we visit each node once.   
// Space Complexity: O(n), in the worst case, the queue can hold all nodes at the last level of the tree, which is O(n) in a complete binary tree.  
//approach: Level Order Traversal
// We perform a level order traversal of the binary tree using a queue. For each level, we keep track of the last node we encounter, which will be the rightmost node at that level. After processing all nodes at a level, we add the value of the last node to our result array.  
// This way, we ensure that we only add the rightmost node of each level to our result array, which gives us the right side view of the binary tree.    


var rightSideView = function(root) {
    let result = [];

    function dfs(node, depth) {
        if (!node) return;

        // If this is the first node we visit at this depth, it's the rightmost
        if (depth === result.length) {
            result.push(node.val);
        }

        // Go right first, then left
        dfs(node.right, depth + 1);
        dfs(node.left, depth + 1);
    }

    dfs(root, 0);
    return result;
};

// Time Complexity: O(n), where n is the number of nodes in the tree, as we visit each node once.   
// Space Complexity: O(h), where h is the height of the tree, due to the recursion stack. In the worst case (skewed tree), this can be O(n).    
//approach: Depth First Search (DFS)    
// We use a depth-first search to traverse the tree. We maintain a `depth` variable to track the current level of the tree. When we visit a node, if its depth is equal to the length of the result array, it means it's the first node we encounter at that depth, so we add its value to the result.
// We first explore the right child before the left child to ensure that we always capture the rightmost node at each level. This way, we build the right side view of the binary tree as we traverse it.                               
// Both approaches yield the same result, but the choice between them can depend on the specific requirements of the problem, such as memory constraints or tree structure. The level order traversal is more intuitive for this problem, while the DFS approach is more space-efficient in terms of queue usage.   
//but it can show call stack overflow for large trees, so the level order traversal is generally preferred for larger trees.