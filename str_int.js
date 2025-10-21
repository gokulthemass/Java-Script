var  str_int = function(s){
    
    let a = s.replace(/[^0-9-]/g, '');
    a = a.replace(/(?!^)-/g, '')
    return a | 0;
    
}

let input = prompt("enter :");
console.log(str_int(input))