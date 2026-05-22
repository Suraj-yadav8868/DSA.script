class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function isCircular(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;          
        fast = fast.next.next;     

        if (slow === fast) {
            return true;
        }
    }

    return false;
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

head.next.next.next.next = head.next;

console.log(isCircular(head));