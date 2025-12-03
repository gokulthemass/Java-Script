var sad = function(input1, input2){
    
    let one = input1.toString();
    let two = input2.toString();
    let index = one.indexOf(two);
    if(index !== -1){
        return 0;
    }
    else{
        return -1;
    }
}
let input1 = prompt("enter: ");
let input2 = prompt("enter: ");
console.log(sad(input1, input2));