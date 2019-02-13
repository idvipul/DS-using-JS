class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // adding a new node to the end of the linked list
    push(val) {
        let newNode = new Node(val);
        let currentNode = this.head;

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            this.tail = newNode;
            this.length++;
        }
        return this;

    }

    // adding a new node to the end of the linked list
    unshift(val) {
        let newNode = new Node(val);
        let currentNode = this.head;

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            this.head = newNode;
            this.head.next = currentNode;
            this.length++;
        }
        return this;
    }

    // adding a node to the linked list @ a specific position
    insertAt(index, val) {
        if (index < 0 || index > this.length)
            return false;

        if (index === this.length) {
            this.push(val);
            return true;
        }

        if (index === 0) {
            this.unshift(val);
            return true;
        }

        let newNode = new Node(val);
        let previousNode = this.get(index - 1);
        let tempNode = previousNode.next;

        previousNode.next = newNode;
        newNode.next = tempNode;
        this.length++;
        return true;
    }

    // remove from the end of the linked list
    pop() {
        let currentNode = this.head;
        let previousNode = this.head;

        if (this.head === null) {
            return undefined;
        }
        while (currentNode.next !== null) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = previousNode;
        this.tail.next = null;
        this.length--;

        return currentNode;
    }

    // remove a new node from the beginning of the linked list
    shift() {
        let currentNode = this.head;

        if (this.head === null) {
            return undefined;
        }

        this.head = currentNode.next;
        currentNode = null;
        this.length--;
        return currentNode;
    }

    // retrieving a node by its position
    get(index) {
        let counter = 0;
        let currentNode = this.head;

        if (index < 0 || index >= this.length) {
            return null;
        }

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        // console.log(currentNode);
        return currentNode;
    }

    // remove a node from the linked list @ a specific position
    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        if (index === this.length - 1) {
            this.pop();
            return true;
        }

        if (index === 0) {
            this.shift();
            return true;
        }

        let previousNode = this.get(index - 1);
        let removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    // changing the value of a node based on it's position
    set(index, val) {
        let foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        // console.log(this.head);
        return false;
    }

    traverse() {
        let currentNode = this.head;

        while (currentNode !== null) {
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }
}

let list = new SinglyLinkedList();
list.push(3);
list.push(8);
list.push(6);
list.pop();
list.shift();
list.unshift(1);
list.unshift(2);
list.get(1);
list.set(1, 7);
list.insertAt(2, 5);
list.removeAt(1);
list.traverse();