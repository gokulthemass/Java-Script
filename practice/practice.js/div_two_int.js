var div = function(input, input1){
    
    let a = Number(input)
    let b = Number(input1)
    if(b ===0){return false}
    let c = Math.trunc(a/b)
    return c;
}
let input = prompt("enter: ");let input1 = prompt("enter: ");
console.log(div(input, input1));