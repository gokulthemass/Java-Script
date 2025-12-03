class node{
    constructor(val,next = null,prev = null){
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}
class double{
    constructor(){
    this.head = null;
    this.tail = null;
}

insertatend(val){
    let newnode = new node(val);
    if(!this.head){
        this.head = newnode; this.tail = newnode; return;
    }
    else{
        this.tail.next = newnode;
        newnode.prev = this.tail;
        this.tail = newnode;
    }
}
traverseforward(){
    let current = this.head;
    while(current !== null){
        console.log(current.val);
        current = current.next
    }
}
traversebackward(){
    let current = this.tail;
    while(current !== null){
        console.log(current.val);
        current = current.prev;
    }
} }

const dll = new double();
dll.insertatend(10)
dll.insertatend(20)
dll.insertatend(30)

console.log("traversebackward");
dll.traversebackward();
console.log("traverseforward");
dll.traverseforward();

