var valid = function(s){
    
    let stack = [];
    let map = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    for(let char of s){
        if( char === '(' || char === '{' || char === '['){
            stack.push(char);
        }
        else if(char === ')' || char === '}' || char === ']'){
            if(stack.pop() !== map[char])
            {
                return false;
            }
            else{
                return true;
            }
        }
    }return stack.length === 0;
}

let input = prompt("enter: ");
console.log(valid(input));