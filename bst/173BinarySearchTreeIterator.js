/*Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):

BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
int next() Moves the pointer to the right, then returns the number at the pointer.
Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.

You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.*/

class BSTIterator {
    constructor(root) {
        this.stack = [];
        this._pushLeft(root); // Initialize by pushing all left nodes
    }

    _pushLeft(node) {
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
    }

    next() {
        let node = this.stack.pop(); // Get the next smallest node
        if (node.right) {
            this._pushLeft(node.right); // Push left subtree of the right child
        }
        return node.val;
    }

    hasNext() {
        return this.stack.length > 0;
    }
}

//time: O(h) for next() where h is the height of the tree, since we may need to traverse down to the leftmost node.
// space: O(h) for the stack, where h is the height of the tree, since we store nodes in the stack.
// This solution efficiently implements an iterator for a binary search tree (BST) using an in-order traversal approach.
// The constructor initializes the iterator by pushing all left nodes of the root onto a stack.
// The `next()` method pops the top node from the stack, which is the next smallest node in the BST, and pushes all left nodes of its right child onto the stack if it exists.
// The `hasNext()` method checks if there are any nodes left in the stack, indicating that there are more elements to traverse.
// This approach ensures that the iterator provides elements in sorted order, leveraging the properties of BSTs.
// The time complexity for `next()` is O(h), where h is the height of the tree, as it may require traversing down to the leftmost node.
// The space complexity is O(h) for the stack, where h is the height of the tree, since we store nodes in the stack.