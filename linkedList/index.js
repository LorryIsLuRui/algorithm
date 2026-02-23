const Node = require("./Node");

class LinkedList {
    head = new Node('head');
    find(ele) {
        let node = this.head;
        while (node) {
            if (node.elemet === ele) {
                const next = node.next;
                node.next = null;
                this.head.next = next;
            }
            node = node.next;
        }
    }
    insert(ele) {
        const node = new Node(ele);
        this.head.next = node;
    }
    remove(ele) {
        let node = this.head;
        while (node) {
            if (node.elemet === ele) {
                const next = node.next;
                node.next = null;
                this.head.next = next;
            }
            node = node.next;
        }
    }
    display() {
        
    }
}