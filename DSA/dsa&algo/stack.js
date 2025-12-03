

// push, pop

// function peek(stack){
//     return stack[stack.length-1];
// }
// var st = function(a){
//     let stack = [];
//     for(let i=0; i<a.length; i++){
//         stack.push(a[i]);
//     } stack.push(3); stack.pop();
//     return stack;
// }
// console.log(st([1,2,3,4,5]))


// balanced stack


// let fun = function(s){
//     let stack = [];
//     for(let i=0 ;i<s.length; i++){
//         if(s[i] === "(" || s[i] === "{" || s[i] === "[") stack.push(s[i]);

//         else if(s[i] === ")" || s[i] === "}" || s[i] === "]") {
//             if(stack.length === 0){
//                 return false;
//             }
//         else stack.pop();
//         }
//     } return stack.length === 0;
// }
// console.log(fun("{}()[]"))


// reverse using push and pop


// var rev = function(s){
//     let stack = [];
//     let revstack = [];

//     for(let i=0; i<s.length; i++){
//         stack.push(s[i]);
//     }
//     while(stack.length > 0) revstack.push(stack.pop());
//     return revstack;
// }
// console.log(rev([1,2,3,4,5]))



// valid parenthesis


var valid = function(s){
    let stack = [];
    for(let i of s){
        if(i>='0' && i<='9'){
            stack.push(i.charCodeAt(0) - '0'.charCodeAt(0))
        }
        else if (i === '-' || i === '+' || i === '*' || i === '/'){
            if(stack.length < 2) console.log("not enough numbs");
            let b = stack.pop();
            let a = stack.pop();
            let res;
            switch(i){
                case '-': res = a - b; break;
                    case '+': res = a + b; break;
                        case '*': res = a * b; break;
                            case '/': res = a / b | 0; break;
            } stack.push(res)
        }
        else{
            console.log("invalid input");
        }
    } if(stack.length !== 1) console.log("invalid");
    return stack;
}
console.log(valid("12+"));
