class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // inserts a value in BST
        insert(val) {
        let newNode = new Node(val);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;

        while(true) {
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
                console.log(true);
                return true;
            }
        }
        console.log(false);
        return false;
    }

    bfs() {
        let currentNode = this.root;
        let queue = [],
            visited = [];

        queue.push(currentNode); // push --> add to the end

        while (queue.length) {
            currentNode = queue.shift(); // shift --> remove from the beginning
            visited.push(currentNode.val);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        console.log(visited);
        return visited;
    }

    // root-left-right
    dfsPreOrder() {
        let visited = [];

        function traverse(node) {
            visited.push(node.val);

            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        console.log(visited);
        return visited;
    }

    // left-right-root
    dfsPostOrder() {
        let visited = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.val);
        }
        traverse(this.root);
        console.log(visited);
        return visited;
    }

    // left-root-right
    dfsInOrder() {
        let visited = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            visited.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        console.log(visited);
        return visited;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.contains(3);
tree.bfs();
tree.dfsPreOrder();
tree.dfsPostOrder();
tree.dfsInOrder();