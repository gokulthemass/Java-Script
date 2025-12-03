var rec = function(aa,ab){
    
    let a = Number(aa);
    let b = Number(bb);
    for( let i=0; i<a; i++){
        let r ="";
        for(let k=0; k<i+1;k++){
            r = r+" ";
        }
        for(let j=0; j<b;j++){
            r = r+"*";
        } console.log(r);
    }
}
let aa = prompt("a: ");
let bb = prompt("b: ");
rec(aa,bb)