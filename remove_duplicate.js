var duplicate = function(input){
    
    let s1 = input.split(",").map(Number).sort((a,b) => a-b)
    let stack = [];
    
    if(s1.length < 0){
        return false;
    }
    for(let i=0; i<s1.length;i++){
    if(s1[i] !== s1[i+1]){
        stack.push(s1[i])
    }
    }
    return stack;
    
}
let input = prompt("enter: ");
console.log(duplicate(input));