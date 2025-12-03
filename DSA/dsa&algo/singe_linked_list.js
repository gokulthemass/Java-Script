class Node{
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

let node1 = new Node(0);
let node2 = new Node(1);
let node3 = new Node(2);
let node4 = new Node(3);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null;

function list(node1){
    let current = node1;
    while(current !== null){
        console.log(current.val)
        current = current.next;
    }
} 
console.log(list(node1));