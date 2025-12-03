
// class queve{
//     constructor(){
//         this.stack = [];
//     }

//     enq(x){
//         this.stack.push(x)
//     }
//     deq(){
//         if(this.stack.isEmpty) console.log("cont deq");
//         return this.stack.shift();
//     }
//     peek(){
//         if(this.stack.isEmpty) console.log("empty");
//         return this.stack[0]
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     size(){
//         return this.stack.length
//     }

//     print(){
//         let prt = '';
//         for(let i=0; i<this.size(); i++){
//             prt = prt + this.stack[i] + " ";
//         }
//         console.log(prt);
        
//     }
// }

// const q = new queve();
// q.enq(1);
// q.enq(2);
// q.enq(3);

// q.print(); console.log("peek:",q.peek());


// count while dequeing

// class queue{
//     constructor(){
//         this.stack = [];
//     }

//     enq(x){
//         this.stack.push(x)
//     }
//     deq(){
//         if(this.stack.length === 0) return null;
//         return this.stack.shift();
//     }
//     isEmpty(){
//         return this.size() === 0;
//     }
//     size(){
//         return this.stack.length
//     }

//     print(){
//         let count = ''; 
//         for(let i=0; i<this.size();i++){
//             count = count + this.stack[i] + " ";
//     } console.log(count);

//     let counts = 0;
//     while(!this.isEmpty()){
//         this.deq();
//         counts++;
//     }
//      console.log(counts);
    
// }}

// const q = new queue();

// console.log("enq: ");

// q.enq(1);
// q.enq(2);
// q.enq(3);
// q.enq(4);
// q.enq(5);

// q.print();


// sum, average, min, max

// class queue{
//     constructor(){
//         this.stack = [];
//     }

//     enq(x){
//         return this.stack.push(x);
//     }
//     deq(){
//         if(this.isEmpty()) return null;
//         return this.stack.shift();
//     }
//     isEmpty(){
//         return this.size() === 0
//     }
//     size(){
//         return this.stack.length;
//     }
//     print(){
//         let item = "";let sum = 0;let min = Infinity;let max = -Infinity;let count = 0;
//         while(!this.isEmpty()){
//             item = this.deq();
//             sum = sum + item;
//             min = Math.min(min, item);
//             max = Math.max(max, item);
//             count++;
//         } return {sum, average: sum / count, min, max, count}        
//     }
// }

// const q = new queue();
// q.enq(1);
// q.enq(2);
// q.enq(3);
// q.enq(4);
// q.enq(5);
// console.log(q.print());


//queue reverse


// class queue{
//     constructor (){
//         this.stack = [];
//     }
//     enq(x){
//         return this.stack.push(x)
//     }
//     deq(){
//         if(this.isEmpty()) return null;
//         return this.stack.shift();
//     }
//     isEmpty(){
//         return this.size() === 0
//     }
//     size(){
//         return this.stack.length;
//     }
//     rev(){
//         let stack2 = [];
//         while(!this.isEmpty()){
//             stack2.push(this.deq());
//         }
//         while(stack2.length > 0){
//             this.enq(stack2.pop())
//         } console.log(this.stack);   
//     }
// }
// const q = new queue();
// q.enq(1);
// q.enq(2);
// q.enq(3);
// q.enq(4);
// q.enq(5);

// q.rev();


// circuler queue


class circle{
    constructor(max = 10){
        this.max = max;
        this.stack = [];
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }

    enq(x){
        if(this.isFull()) return null;
        this.rear = (this.rear + 1) % this.max;
        this.stack[this.rear] = x;
        this.size++;
    }
    deq(){
        if(this.isEmpty()) return null;   // front = 0 + 0 % 10 = 0
        const item = this.stack[this.front]
        this.front=(this.front + 1) % this.max;
        this.size--;
        return item;
    }
    isEmpty(){
        return this.size === 0
    }
    isFull(){
        return this.size === this.max;
    }
    size(){
        return this.size;
    }

    print(){
        let count = "";
        for(let i=0; i<this.size; i++){
            count = count + this.stack[i] + " ";
        } 
        console.log(count);
    }
}

const q = new circle();

q.enq(1);
q.enq(2);
q.enq(3);
q.enq(4);
q.enq(5);
q.enq(6);

q.print();