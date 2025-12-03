var reverse = function(input){
    
    let num = Number(input);
    
let re_input = parseInt(Math.abs(num).toString().split("").reverse().join(""));
    return re_input * Math.sign(num);
    
}

let input = prompt("enter : ");
console.log(reverse(input))