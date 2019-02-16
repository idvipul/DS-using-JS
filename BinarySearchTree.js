class Node {
    constructor() {
        this.root = val;
    }
}

class BinarySearchTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    // inserts a value in BST
    insert(val) {
        let newNode = new Node(val);

        if (this.root === null) {
            this.root = newNode;
        }

        let currentNode = this.root;

        if (val === currentNode.val) {
            return undefined;
        }

        if (val < currentNode.val) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
                return this;
            } else {
                currentNode = currentNode.left;
            }
        } else if (val > currentNode.val) {
            if (currentNode.right === null) {
                currentNode.right = newNode;
                return this;
            } else {
                currentNode = currentNode.right;
            }
        }
    }

    // to determine if a node is present in BST or not
    contains(val) {
        if (this.root === null) {
            return undefined;
        }

        let currentNode = this.root;
        let found = false;

        while (currentNode && !found ) {
            if (val < currentNode.val) {
                currentNode = currentNode.left;
            } else if (val > currentNode.val) {
                currentNode = currentNode.right;
            } else {
                return true;
            }
        }
        return false;
    }

    bfs() {
        let currentNode = this.root;
        let queue = [],
            visited = [];

        queue.push(currentNode); // push --> add to the end

        while (currentNode.length !== null) {
            currentNode = currentNode.shift(); // shift --> remove from the beginning

        }
    }
}