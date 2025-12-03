
var tri = function(nn){

let n = Number(nn); 
for(let i=1; i<=n; i++){
    let row= "";
    
    for(s= 1; s<= n -i; s++){
        row= row + "  ";
    }
    
    for(let j=1; j<=i; j++){
        row= row + "* ";
        }console.log(row);
    } 
for(let k=n - 1; k>=1; k--){
    let roo ="";
    
    for(let s = 1; s<= n - k; s++){
        roo= roo + "  ";
    }
    
    for(let t=1; t<=k; t++){
        roo = roo + "* ";
        }console.log(roo);
}
}
let nn = prompt("enter: ");
tri(nn)