var romantonum = function(s){
    
    const romanvalues = {
       "I"           : 1,
"V"            : 5,
"X"           : 10,
"L"            : 50,
"C"          : 100,
"D"            : 500,
"M"           : 1000
    };
    
    let total = 0;
    for(i =0; i<s.length; i ++){
        if(i < s.length - 1 && romanvalues[s[i]] < romanvalues[s[i + 1]]){
            total = total - romanvalues[s[i]];
        }
        else{
            total = total + romanvalues[s[i]];
        }
    }
    return total;
}

let input = prompt("enter: ");
console.log(romantonum(input));
