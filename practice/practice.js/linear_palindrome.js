

var linear = function(n){
    if(n < 0) return[];
    if(n === 1) return n;
    if(n === 2) return [0,1];
    let fab =[0, 1];
    for(let i=2; i<n; i++){
        fab.push(fab[i-2]+fab[i-1]);
    }   return fab;
}

console.log(linear(7));
