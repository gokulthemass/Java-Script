var remove = function(input, input1){
    
    let s1 = input.split(",").map(Number);
    let s2 = input1.split(",").map(Number);
    let stack = [];
    
    for( let i =0; i<s1.length; i++){
        if(!s2.includes(s1[i])){
            stack.push(s1[i])
        }
    }return stack;
}
let input = prompt("enter: ");
let input1 = prompt("enter: ");
console.log(remove(input, input1));