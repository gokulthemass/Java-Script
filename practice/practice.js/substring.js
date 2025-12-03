function stri(s){
    
    let start =0; end =0;
    maxlen = 0;
    let seen = new Set();
    
    for( end =0; end < s.length; end++){
        while(seen.has(s[end])){
            seen.delete(s[start]);
            start ++;
        }
        seen.add(s[end]);
        maxlen = Math.max(maxlen, end - start + 1)
    }
    return maxlen;
}

str = prompt("enter:");
console.log(stri(str))