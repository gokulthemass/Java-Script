let a = [1,2,1,3,4,4,5];

var repeat = function(a){
    let map = new Map();
    let pam = new Map();
    for(const i of a){
        map.set(i, (map.get(i) || 0) + 1);
    } 
    for(const [num, count] of map){
        if(count === 1){
            pam.set(num, count);
        }
    } return {map, pam}
}
console.log(repeat(a))