var quad = function(input,input1){
    
    let target =Number(input1);
    let num = input.split(",").map(Number).sort((a,b) =>a-b);
    let stack = [];
    
    for(let i=0; i<num.length-3; i++){
        if(i>0 && num[i] === num[i+1]){
            continue;
        }
    
    for(let h=0; h<num.length-2; h++){
        if(h>i+1 && num[h] === num[h]){
            continue;
        }
    
    let j = h + 1;
    let k = num.length - 1;
    
    while(j < k){
        let total = num[i] +num[j] +num[k] +num[h];
        
        if(total < target){
            j++
        }
        else if(total > target){
            k--
        }
        else{
            stack.push([num[i], num[j], num[k], num[h]]);
            j++
            while(j < k && num[j] === num[j+1]){
                j++
            }
            while(j < k && num[k] === num[k-1]){
                k--
            }
            j++
            k--
        }}}
    } return stack;
}
let input = prompt("enter array : ");
let input1 = prompt("enter target : ");
console.log(quad(input, input1));