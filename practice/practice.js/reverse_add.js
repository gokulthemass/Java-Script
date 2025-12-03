
var add = function(){
    let l1 = prompt("enter l1 : "); 
    let l2 = prompt("enter l2 : ");
    
    let l11 = l1.includes(",") ? l1.split(",").reverse().join("") : l1.split("").reverse().join("");
    let l22 = l2.includes(",") ? l2.split(",").reverse().join("") : l2.split("").reverse().join("");
    
    let result = Number(l11) + Number(l22);
    
    console.log(result);
}

add();