


// // minheap

// var minheap = function(){

//     let stack = [null];
    
//     this.insert = function(num){
//         stack.push(num);
//         if(stack.length > 2){
//             let max = stack.length - 1;
//             let parent = Math.floor(max/2);
//             let grandparent = Math.floor(parent/2);
//             while(stack[max] < stack[parent]){
//                 if(max >= 1){
//                     [stack[parent], stack[max]] = [stack[max], stack[parent]]
//                     if(parent > grandparent) {
//                         max = parent;
//                     }
//                     else{
//                         break;
//                     }
//                 }
//             }
//         }
//     }

//     this.remove = function(){
//         let smallest = stack[1];
//         if(stack.length > 2){
//             stack[1] = stack[stack.length - 1];
//             stack.splice(stack.length - 1);
//             if(stack.length === 3){
//                 if(stack[1] > stack[2]){
//                     [stack[1], stack[2]]  =  [stack[2], stack[1]]
//                 }
//                 return smallest;
//             }
//             let i=1; 
//             let left = 2*i ; 
//             let right = 2*i + 1;
//             while(stack[i] >= stack[left] || stack[i] >= stack[right]){
//                 if(stack[left] < stack[right]){
//                     [stack[i], stack[left]]  =  [stack[left], stack[i]]
//                     i= 2*i;
//                 }
//                 else{
//                     [stack[i], stack[right]]  =  [stack[right], stack[i]]
//                     i= 2*i + 1;
//                 }
//                 left = 2*i ; right = 2*i + 1;
//                 if(stack[left] === undefined || stack[right] === undefined){
//                     break;
//                 }
//             }
//         }
//         else if(stack.length === 2) stack.splice(1,1);
//         else return null;

//         return smallest;
//             }
            
    

//     this.sort = function(){
//         let result = [];
//         while(stack.length > 1){
//             result.push(this.remove())
//         }
//         return result;
//     };
// };

// var heap = new minheap();

// heap.insert(1);
// heap.insert(2);
// heap.insert(3);
// heap.insert(4);
// heap.insert(5);
// heap.insert(6);
// heap.insert(7);
// heap.insert(8);
// heap.insert(9);
// heap.remove();

// console.log(heap.sort())


// // max heap


// // var maxheap = function(s) {
// //     let stack = [null];

// //     this.insert = function(num){
// //         stack.push(num);
// //         if(stack.length > 2){
// //             let max = stack.length - 1;
// //             let parent = Math.floor(max / 2);
// //             let grandparent = Math.floor(parent / 2);
// //             while(stack[max] > stack[parent]){
// //                 if(max >= 1){
// //                     [stack[max], stack[parent]]  =  [stack[parent], stack[max]]
// //                 }
// //                 if(stack[parent] > stack[grandparent]){
// //                     max = parent;
// //                 }
// //                 else{
// //                     break;
// //                 }
// //             }
// //         }
// //     }

// //     this.remove = function(){
// //         let smallest = stack[1]
// //         if(stack.length > 2){
// //             stack[1] = stack[stack.length - 1];
// //             stack.splice(stack.length - 1);
// //             if(stack.length === 3){
// //                 if(stack[1] < stack[2]){
// //                     [stack[1], stack[2]]  =  [stack[2], stack[1]]
// //                 }
// //                 return smallest;
// //             }
// //             let i = 1; 
// //             let left = i*2;
// //             let right = i*2 + 1;
// //             while(stack[left] >= stack[i] || stack[right] >= stack[i]){
// //                 if(stack[left] > stack[right]){
// //                     [stack[left], stack[i]]  =  [stack[i], stack[left]]
// //                     i=i*2
// //                 }
// //                 else{
// //                     [stack[right], stack[i]]  =  [stack[i], stack[right]]
// //                     i=i*2 + 1;
// //                 }
// //                 left = i*2;
// //                 right = i*2 + 1;

// //                 if(stack[left] === undefined || stack[right] === undefined){
// //                     break;
// //                 }
// //             }
// //         }
// //         else if(stack.length === 2) stack.splice(1,1)
// //             else return null; 
// //         return smallest;
// //     }

// //     this.sort = function(){
// //         let result = [];
// //         while(stack.length > 1){
// //             result.push(stack.pop());
// //         } 
// //         return result;
// //     }
// // }

// // const q = new maxheap();

// // q.insert(1);
// // q.insert(1);
// // q.insert(1);
// // q.insert(1);
// // q.insert(1);
// // q.remove();

// // console.log(q.sort());


// Find Kth Largest Element in an Array

// Given an integer array and an integer k, find the kth largest element.

// Use a min-heap of size k to solve efficiently.


var minheap = function(){
let stack = [null];

    this.insert = function(x){
        stack.push(x)
        if(stack.length > 2){
            let max = stack.length - 1;
            while(stack[max] < stack[Math.floor(max / 2)]){
                if(max>=1){
                [stack[max] , stack[Math.floor(max / 2)]]  =   [stack[Math.floor((max / 2))] , stack[max]]
                if(Math.floor(max / 2) > 1) max = Math.floor(max / 2)
                else break;
                }
            }
        }
    }

    this.remove = function(){
        let smallest = stack[1];
        if(stack.length > 2){
            stack[1] = stack[stack.length - 1];
            stack.splice(stack.length - 1);
            if(stack.length === 3){
                if(stack[1] > stack[2]){
                    [stack[1], stack[2]] = [stack[2], stack[1]]
                }
                return smallest;
            }
            let i = 1
            let left = 2 * i;
            let right = 2 * i + 1;
            while( stack[i] >= stack[left] || stack[i] >= stack[right]){
                if(stack[left] < stack[right]){
                    [stack[left], stack[i]]  =  [stack[i], stack[left]]
                    i= 2 * i
                }
                else{
                    [stack[right], stack[i]]  =  [stack[i], stack[right]] 
                    i=2*i + 1                   
                }
                left = 2*i
                right = 2*i + 1;
                if(stack[left] === undefined || stack[right] === undefined) break; 
            }
        }
            else if(stack.length === 2) stack.splice(1,1);
            else return null;
            return smallest;
    }

    this.sort = function(K){
        return stack[1];
    }

}

const q = new minheap();

q.insert(5);
q.insert(4);
q.insert(3);
q.insert(2);
q.insert(1);

console.log(q.sort(2));
