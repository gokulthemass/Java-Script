var sum = function(a,b){
    
    let aa = a.split(",").map(Number);
    let bb = Number(b)
    let length = aa.length;
    for(let i=0; i<length; i++){
            for(let j=i+1; j<length;j++){
                if(aa[i] + aa[j] === bb){
                    return [i,j];
                }
            }
        }
}
let a= prompt("enter a: ");
let b=prompt("enter b: ");
console.log(sum(a,b))