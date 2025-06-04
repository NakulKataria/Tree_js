/*Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).*/

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let queue=[root], result=[];
    while(queue.length>0){
        let size= queue.length;
         let level=[];
        for(let i=0;i<size;i++){
            let node= queue.shift();
           if(node!==null){ 
            level.push(node.val);
            if(node.left!==null){
                queue.push(node.left);
            }
            if(node.right!==null){
                queue.push(node.right);
            }
           }
        }
        result.push(level);
    }
  return result;  
};
// Time Complexity: O(n), where n is the number of nodes in the binary tree. Each node is visited exactly once.
// Space Complexity: O(n), where n is the number of nodes in the binary tree. The queue can hold all nodes in the worst case (e.g., a complete binary tree).
// Approach: The function uses a breadth-first search (BFS) strategy to traverse the binary tree level by level.
// It initializes a queue with the root node and an empty result array.
// In each iteration, it processes all nodes at the current level, collecting their values in a temporary array (`level`).
// For each node, it checks if it has left and right children and adds them to the queue for processing in the next level.
// After processing all nodes at the current level, it adds the `level` array to the result array.
// The function continues until all levels of the tree have been processed, resulting in a 2D array where each sub-array represents a level of the tree.
// The final result is returned as an array of arrays, where each inner array contains the values of the nodes at that level.
// The function is efficient and straightforward, leveraging a queue to explore the tree structure in a level-order manner.
// The function is designed to handle various tree structures, including balanced and unbalanced trees, and efficiently collects node values in a single traversal.
// The function can be easily adapted for different tree structures, such as binary search trees or general trees, by modifying the traversal logic if needed.
// The function can also be extended to handle additional requirements, such as filtering nodes based on specific criteria or collecting additional information during traversal.
// The function is versatile and can be integrated into larger tree processing algorithms or used as a standalone utility for level-order traversal tasks.
// The function can be used in various applications, such as generating output in a specific sequence, constructing trees from node values, or processing tree-based data structures.
// The function can be tested with various binary tree structures to ensure correctness and efficiency in level-order traversal.
// The function can be used in conjunction with other tree traversal functions to perform complex operations on binary trees, such as searching, inserting, or deleting nodes.
// The function can also be optimized further if needed, but the current implementation is efficient for most practical scenarios involving binary trees.
// The function can be used in scenarios where level-order traversal is required for tasks like generating lists of nodes, constructing trees, or analyzing tree structures.
// The function can be adapted for iterative or recursive implementations, depending on the specific requirements or constraints of the problem.
// The function can also be extended to handle additional features, such as collecting node depths or parent-child relationships during traversal.
// The function is designed to be efficient and straightforward, making it suitable for various applications in tree processing and analysis.
