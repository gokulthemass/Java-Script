class node {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}
class clll{
    constructor(){
        this.head = null;
    }
insertathead(val){
let newnode = new node(val);
    if(!this.head){
        this.head = newnode;
        newnode.next = newnode;
    }
    else{
        let current = this.head;
        while(current.next !== this.head){  // next for upto the last node 
            current = current.next;
        }
        newnode.next = this.head;
        current.next = newnode;
        this.head = newnode;
    }
    }

print(){
    if(!this.head) return;
    let current = this.head;
    do {
        console.log(current.val);
        current = current.next;
    } while(current !== this.head)
    }
}
    const cl = new clll();
    cl.insertathead(10);
    cl.insertathead(20);
    cl.insertathead(30);
    cl.insertathead(40);

    cl.print();