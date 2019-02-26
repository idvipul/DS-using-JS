// Queue -> First-In-First-Out (FIFO) or Last-In-Last-Out (LILO)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // add to the end
    enqueue(val) {
        let newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // remove from the beginning
    dequeue() {
        if (this.head === null) {
            return null;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        let currentNode = this.head;
        this.head = this.head.next;
        this.length--;
        return currentNode.val;
    }

    // prints the queue
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

let queue = new Queue();
queue.enqueue(7);
queue.enqueue(13);
queue.enqueue(9);
queue.dequeue();
queue.print();