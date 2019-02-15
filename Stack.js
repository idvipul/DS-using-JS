class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // adding to the beginning
    push(val) {
        let newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let currentNode = this.head;
            this.head = newNode;
            newNode.next = currentNode;
        }
        this.length++;
        return this;
    }

    // removing from the beginning
    pop() {
        if (this.head === null) {
            return undefined;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        let currentNode = this.head;
        this.head = this.head.next;
        this.length++;
        return currentNode.val;
    }

    // prints the stack
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

let stack = new Stack();
stack.push(7);
stack.push(5);
stack.push(1);
stack.pop();
stack.print();