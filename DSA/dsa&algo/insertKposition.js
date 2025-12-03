class node {
    constructor(val,next = null,prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}
class double{
    constructor() {
    this.head = null;
    this.tail = null;
}

insertatend(val, position) {
    let newnode = new node(val);
    if(!this.head){
        this.head = newnode; this.tail = newnode; return;
    }
    if(position === undefined || position === null){
        this.tail.next = newnode;
        newnode.prev = this.tail;
        this.tail = newnode;
        return;
    }
    if(position === 0){
        newnode.next = this.head;
        this.head.prev = newnode;
        this.head = newnode;
        return;
    }

let current = this.head;

for(let i=0; i<position - 1 && current.next !== null ;i++){
    current = current.next;
}
if(current.next === null){
        this.tail.next = newnode;
        newnode.prev = this.tail;
        this.tail = newnode;
}
else{
let prevnode = current.prev;
newnode.prev = prevnode;
prevnode.next = newnode;
newnode.next = current;
current.prev = newnode;
}}

traverseforward() {
    let current = this.head;
    while(current !== null){
        console.log(current.val);
        current = current.next;
    }}
} 


const dll = new double();
dll.insertatend(10);
dll.insertatend(20);
dll.insertatend(30);
dll.insertatend(60, 2);
dll.traverseforward();