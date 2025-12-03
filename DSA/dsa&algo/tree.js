


// // class Node {
// //     constructor(val, left=null, right=null){
// //         this.val = val; 
// //         this.left = left; 
// //         this.right = right;
// //     }
// // }
// // class bst {
// //     constructor(){
// //         this.root = null;
// //     }

const { result } = require("lodash");

// //     insert(val) {
// //         const node = this.root;
// //         if(node === null){ 
// //             this.root = new Node(val);
// //             return
// //         }
// //         else{

// //             function tree(node){
// //                 if(val < node.val){
// //                     if (node.left === null) {
// //                         node.left = new Node(val); 
// //                         return;
// //                     }
// //                     else if(node.left !== null){
// //                         return tree(node.left);
// //                     }
// //                 }
// //                 else if(val > node.val){
// //                     if (node.right === null) {
// //                         node.right = new Node(val); 
// //                         return;
// //                     }
// //                     else if(node.right !== null) {
// //                         return tree(node.right);
// //                     }
// //                 }
// //                 else {
// //                     return null;
// //                 }
// //             } return tree(val)
// //         }
// //     }
// //     findmin(){
// //         let current = this.root;
// //         while(current.left !== null){
// //             current = current.left;
// //         }
// //         return current.val;
// //     }
// //     findmax(){
// //         let current = this.root;
// //         while(current.right !== null){
// //             current = current.right;
// //         }
// //         return current.val;
// //     }
// //     find(val) {
// //         let current = this.root;
// //         while (current !== null){
// //             if (val < current.val){
// //                 current = current.left;
// //             }
// //             else if (val > current.val){
// //                 current = current.right;
// //             }
// //             else{
// //                 return null;
// //             }
// //         } return current;
// //     }
// //     ispresent(val) {
// //         let current = this.root;
// //         while (current) {
// //             if(val === current.val) return true;
// //             else if (val < current.val){
// //                 current = current.left;
// //             }
// //             else{
// //                 current = current.right;
// //             } 
// //         } return false;
// //     }    
// //     remove(){
// //         let noderemove = function (node, val){
// //             if(node === null){
// //                 return null;
// //             }
// //             if(node.val === val){
// //                 if(node.left === null && node.right === null){
// //                     return null;
// //                 }
// //                 if(node.left === null){
// //                     return node.right;
// //                 }
// //                 if(node.right === null){
// //                     return node.left;
// //                 }

            
// //                 let tempnode = node.right;
// //                 while (tempnode.left !== null){
// //                     tempnode = tempnode.left;
// //                 }
// //                 node.val = tempnode.val;
// //                 tempnode = noderemove(tempnode, tempnode.data);
// //                 return node;
// //             }
// //             else if (val < node.val){
// //                 node.left = noderemove(node.left, node.left.val)
// //                 return node;
// //             }
// //             else{
// //                 node.right = noderemove(node.right, node.right.val);
// //                 return node;
// //             }
// //         } 
// //         this.root = noderemove(this.root, val);
// //     }
// // }

// // const q = new bst();

// // q.insert(1);

// // q.insert(2);

// // q.insert(3);

// // q.insert(4);

// // q.insert(5);

// // q.insert(6);

// // q.insert(7);

// // console.log("0 ispresent: ",q.ispresent(4))
// // console.log("1 ispresent: ",q.ispresent(1))

// // console.log("0 find: ",q.find(6))

// // console.log("max: ",q.findmax())
// // console.log("min: ",q.findmin())


// class Node {
//   constructor(data, left = null, right = null) {
//     this.data = data;
//     this.left = left;
//     this.right = right;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }
//   add(data) {
//     const node = this.root;
//     if (node === null) {
//       this.root = new Node(data);
//       return;
//     } else {
//       const searchTree = function(node) {
//         if (data < node.data) {
//           if (node.left === null) {
//             node.left = new Node(data);
//             return;
//           } else if (node.left !== null) {
//             return searchTree(node.left);
//           }
//         } else if (data > node.data) {
//           if (node.right === null) {
//             node.right = new Node(data);
//             return;
//           } else if (node.right !== null) {
//             return searchTree(node.right);
//           }
//         } else {
//           return null;
//         }
//       };
//       return searchTree(node);
//     }
//   }
//   findMin() {
//     let current = this.root;
//     while (current.left !== null) {
//       current = current.left;
//     }
//     return current.data;
//   }
//   findMax() {
//     let current = this.root;
//     while (current.right !== null) {
//       current = current.right;
//     }
//     return current.data;
//   }
//   find(data) {
//     let current = this.root;
//     while (current.data !== data) {
//       if (data < current.data) {
//         current = current.left;
//       } else {
//         current = current.right;
//       }
//       if (current === null) {
//         return null;
//       }
//     }
//     return current;
//   }
//   isPresent(data) {
//     let current = this.root;
//     while (current) {
//       if (data === current.data) {
//         return true;
//       }
//       if (data < current.data) {
//         current = current.left;
//       } else {
//         current = current.right;
//       }
//     }
//     return false;
//   }
//   remove(data) {
//     const removeNode = function(node, data) {
//       if (node == null) {
//         return null;
//       }
//       if (data == node.data) {
//         // node has no children 
//         if (node.left == null && node.right == null) {
//           return null;
//         }
//         // node has no left child 
//         if (node.left == null) {
//           return node.right;
//         }
//         // node has no right child 
//         if (node.right == null) {
//           return node.left;
//         }
//         // node has two children 
//         var tempNode = node.right;
//         while (tempNode.left !== null) {
//           tempNode = tempNode.left;
//         }
//         node.data = tempNode.data;
//         node.right = removeNode(node.right, tempNode.data);
//         return node;
//       } else if (data < node.data) {
//         node.left = removeNode(node.left, data);
//         return node;
//       } else {
//         node.right = removeNode(node.right, data);
//         return node;
//       }
//     }
//     this.root = removeNode(this.root, data);
//   } 
//   isBalanced() {
//     return (this.findMinHeight() >= this.findMaxHeight() - 1)
//   }
//   findMinHeight(node = this.root) {
//       if (node == null) {
//           return -1;
//       };
//       let left = this.findMinHeight(node.left);
//       let right = this.findMinHeight(node.right);
//       if (left < right) {
//           return left + 1;
//       } else {
//           return right + 1;
//       };
//   }
//   findMaxHeight(node = this.root) {
//       if (node == null) {
//           return -1;
//       };
//       let left = this.findMaxHeight(node.left);
//       let right = this.findMaxHeight(node.right);
//       if (left > right) {
//           return left + 1;
//       } else {
//           return right + 1;
//       };
//   }
//   inOrder() {
//     if (this.root == null) {
//       return null;
//     } else {
//       var result = new Array();
//       function traverseInOrder(node) {       
//         node.left && traverseInOrder(node.left);
//         result.push(node.data);
//         node.right && traverseInOrder(node.right);
//       }
//       traverseInOrder(this.root);
//       return result;
//     };
//   }
//   preOrder() {
//     if (this.root == null) {
//       return null;
//     } else {
//       var result = new Array();
//       function traversePreOrder(node) {
//         result.push(node.data);
//         node.left && traversePreOrder(node.left);
//         node.right && traversePreOrder(node.right);
//       };
//       traversePreOrder(this.root);
//       return result;
//     };
//   }
//   postOrder() {
//     if (this.root == null) {
//       return null;
//     } else {
//       var result = new Array();
//       function traversePostOrder(node) {
//         node.left && traversePostOrder(node.left);
//         node.right && traversePostOrder(node.right);
//         result.push(node.data);
//       };
//       traversePostOrder(this.root);
//       return result;
//     }
//   }
  
//   levelOrder() {
//       let result = [];
//       let Q = []; 
//       if (this.root != null) {
//           Q.push(this.root);
//           while(Q.length > 0) {
//               let node = Q.shift();
//               result.push(node.data);
//               if (node.left != null) {
//                   Q.push(node.left);
//               };
//               if (node.right != null) {
//                   Q.push(node.right);
//               };
//           };
//           return result;
//       } else {
//           return null;
//       };
//   };
// }



// const bst = new BST();

// bst.add(9);
// bst.add(4);
// bst.add(17);
// bst.add(3);
// bst.add(6);
// bst.add(22);
// bst.add(5);
// bst.add(7);
// bst.add(20);

// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
// bst.add(10);
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
// console.log('inOrder: ' + bst.inOrder());
// console.log('preOrder: ' + bst.preOrder());
// console.log('postOrder: ' + bst.postOrder());

// console.log('levelOrder: ' + bst.levelOrder());
// console.log(bst.findMin());
// console.log(bst.findMax());




class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class tree{
    constructor(){
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if(node === null){
            this.root = new Node(data);
            return;
        }
        else {
            const searchTree = function(node){
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    }
                    else if(node.left !== null){
                        return searchTree(node.left);
                    }
                }
                else if(data > node.data){
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    }
                    else if(node.right !== null){
                        return searchTree(node.right);
                    }
                }
                else {
                    return null;
                }
            }; return searchTree(node)
        }
    }
    remove(data){
        const removenode = function(node, data){
            if(node === null){
                return null;
            }
            if(node.data == data){
                if(node.left === null && node.right === null){
                    return null;
                }
                if(node.left === null){
                    return node.right;
                }
                if(node.right === null){
                    return node.left;
                }

                var tempnode = node.right;
                while(tempnode.left !== null){
                    tempnode = tempnode.left;
                }
                node.data = tempnode.data;
                node.right = removenode(node.right, tempnode.data);   // calling the function to delete the original data (tempnode.left) because we using the duplicate in node.data 
            }
            else if(data < node.data){
                node.left = removenode(node.left, data);
                return;
            }
            else {
                node.right = removenode(node.right, data);
                return;
            }
        }; this.root = removenode(this.root, data);
    }
    findmin(){
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.data;
    }
    findmax(){
        let current = this.root;
        while(current.right !== null){
            current = current.right;
        }
        return current.data;
    }
    inorder(){
        if(this.root == null){
            return null;
        }
        else {
            let result = new Array();
        function traverseinorder(node){
            
            node.left && traverseinorder(node.left);
            result.push(node.data);
            node.right && traverseinorder(node.right);
        };
        traverseinorder(this.root);
        return result;
    }
    }
  preorder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }
  postorder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }   
}

const bst = new tree();

bst.add(3);
bst.add(4);
bst.add(5);
bst.add(6);
bst.add(7);
bst.add(6);
bst.add(9);
bst.add(10);
bst.add(17);
bst.add(20);
bst.add(22);

console.log(bst.findmax());
console.log(bst.findmin());
console.log(bst.inorder());
console.log(bst.preorder());
console.log(bst.postorder());





