        // Node class for the binary tree
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

// Function to get Preorder, Inorder,
// and Postorder traversal of Binary
// Tree in One traversal
function preInPostTraversal(root) {
    // Arrays to store traversals
    let pre = [];
    let inOrder = [];
    let post = [];

    // If the tree is empty,
    // return empty traversals
    if (!root) {
        return [];
    }

    // Stack to maintain nodes
    // and their traversal state
    let stack = [];

    // Start with the root
    // node and state 1 (preorder)
    stack.push([root, 1]);

    while (stack.length > 0) {
        let [node, state] = stack.pop();

        // This is part of pre
        if (state === 1) {
            // Store the node's data
            // in the preorder traversal
            pre.push(node.data);
            // Move to state 2
            // (inorder) for this node
            state = 2;
            // Push the updated state
            // back onto the stack
            stack.push([node, state]);

            // Push left child onto
            // the stack for processing
            if (node.left !== null) {
                stack.push([node.left, 1]);
            }
        }
        // This is a part of in
        else if (state === 2) {
            // Store the node's data
            // in the inorder traversal
            inOrder.push(node.data);
            // Move to state 3
            // (postorder) for this node
            state = 3;
            // Push the updated state
            // back onto the stack
            stack.push([node, state]);

            // Push right child onto
            // the stack for processing
            if (node.right !== null) {
                stack.push([node.right, 1]);
            }
        }
        // This is part of post
        else {
            // Store the node's data
            // in the postorder traversal
            post.push(node.data);
        }
    }

    // Returning the traversals
    return [pre, inOrder, post];
}

// Function to print
// the elements of an array
function printArray(arr) {
    // Iterate through the
    // array and print each element
    for (let val of arr) {
        process.stdout.write(val + " ");
    }
    process.stdout.write("\n");
}

// Main function
function main() {
    // Creating a sample binary tree
    let root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);

    // Getting the pre-order,
    // in-order, and post-order traversals
    let traversals = preInPostTraversal(root);

    // Extracting the 
    // traversals from the result
    let pre = traversals[0];
    let inOrder = traversals[1];
    let post = traversals[2];

    // Printing the traversals
    process.stdout.write("Preorder traversal: ");
    printArray(pre);

    process.stdout.write("Inorder traversal: ");
    printArray(inOrder);

    process.stdout.write("Postorder traversal: ");
    printArray(post);
}

main();
          