class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // adding a node to the end
    push(val) {
        let newNode = new Node(val);
        let currentNode = this.head;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            newNode.prev = currentNode;
            this.tail = newNode;
            this.length++;
        }
    }

    // adding a node at the beginning
    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
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
        let currentNode = this.head;
        let i;

        for (i = 0; i < index - 1; i++) {
            currentNode = currentNode.next;
        }

        newNode.next = currentNode.next;
        this.head.prev = newNode;
        currentNode.next = newNode;
        newNode.prev = this.head;
        this.length++;
        return true;
    }

    // removing a node from the end
    pop() {
        let poppedNode = this.tail;

        if (!this.head) {
            return undefined;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            // poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    // remove a new node from the beginning
    shift() {
        let currentNode = this.head;

        if (!this.head) {
            return null;
        }

        if (this.length === 1) {
            this.prev = null;
            this.next = null;
        } else {
            this.head = currentNode.next;
            this.head.prev = null;
            currentNode.next = null;
        }
        this.length--;
        return currentNode;
    }

    // prints the linked list
    print() {
        let arr = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode.val);
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
}

let list = new DoublyLinkedList();
list.push(3);
list.push(5);
list.push(7);
list.push(11);
list.pop();
list.shift();
list.unshift(11);
list.insertAt(4, 8);
list.print();