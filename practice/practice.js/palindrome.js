var pal = function(s){
    
    
    let num = Number(s);
    if(num<=0){return false;}
    let ori = num.toString();
    let rev = ori.split("").reverse().join("");
    if(ori = rev){
        return true;
    }
    
}

let input= prompt("enter : ");
console.log(pal(input));