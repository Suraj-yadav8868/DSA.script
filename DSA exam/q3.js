class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextNode = current.next; 
        current.next = prev;         
        prev = current;              
        current = nextNode;          
    }

    return prev; 
}


function printList(head) {
    let temp = head;

    while (temp !== null) {
        process.stdout.write(temp.data + " -> ");
        temp = temp.next;
    }

    console.log("null");
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log("Original List:");
printList(head);

head = reverseList(head);

console.log("Reversed List:");
printList(head);