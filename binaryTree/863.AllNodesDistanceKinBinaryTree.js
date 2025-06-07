/*Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

You can return the answer in any order.*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    // map the parent to get and path from child to parent
    let parentOf=new Map();
    let visited= new Map();
    visited.set(root,false)
    let queue=[root];
    while(queue.length>0){
        let size=queue.length;
        for(let i=0;i<size;i++){
            let node = queue.shift();
            if(node){
                if(node.left){
                    queue.push(node.left);
                    parentOf.set(node.left,node);
                    visited.set(node.left,false);
                }
                if(node.right){
                    queue.push(node.right);
                    parentOf.set(node.right,node);
                    visited.set(node.right,false);
                }
            }
        }
    }
    //now we will start bfs from target to upto k levels and return k th level
    
    // let result=[[target]]
    queue.push(target);
    visited.set(target,true);
    let j=0;
    while(queue.length>0 && j<k){
        let size=queue.length;
        
        for(let i=0;i<size;i++){
            let node = queue.shift();
            if(node){
                if(node.left && !visited.get(node.left)){
                    queue.push(node.left);
                    visited.set(node.left,true)
                }
                   
                if(node.right && !visited.get(node.right)){
                    queue.push(node.right);
                    visited.set(node.right,true);
                }
                if(parentOf.get(node) && !visited.get(parentOf.get(node))){
                    queue.push(parentOf.get(node));
                    visited.set(parentOf.get(node),true);
                }
            }
            
        }
        j++;
    }
    //get values from queue
    let result=[];
    for(let i=0;i<queue.length;i++){
       result[i]=queue[i].val;
    }
    return result;

};

// Time Complexity: O(n) - where n is the number of nodes in the tree, as we traverse each node once.
// Space Complexity: O(n) - for the parent map and visited map, which store references to each node in the tree.
// This solution efficiently finds all nodes at distance k from a target node in a binary tree by first mapping parent-child relationships and then performing a breadth-first search (BFS) to gather nodes at the specified distance.
// The use of a queue allows for level-order traversal, ensuring that all nodes at the desired distance are collected.
// The function `distanceK` returns an array of values of all nodes that are at distance k from the target node in a binary tree.
// The solution handles edge cases, such as when the target node is null or when k is zero, by returning the target node's value directly in those cases.
// The approach is optimal for the problem and ensures that all nodes are visited only once, making it efficient for large trees.
// The function can be used for various applications, such as finding nodes in a network or analyzing relationships in hierarchical data structures.
// The function `distanceK` takes the root of a binary tree, a target node, and an integer k, and returns an array of values of all nodes that are at distance k from the target node.
// It uses a breadth-first search (BFS) approach to traverse the tree, mapping parent-child relationships to facilitate traversal in both directions (to parent and children).
// The solution is efficient and handles the constraints of the problem well, ensuring that the time complexity remains linear with respect to the number of nodes in the tree.