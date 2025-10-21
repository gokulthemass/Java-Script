var nth_end = function(s1, s2){
    
    let num = s1.includes(",") ? s1.split(",").map(Number) : s1.split("").map(Number)
    let n = Number(s2);
    if(num.length == 0 || n == 0){
        return num;
    }
    else{
        let size_arr = num.length;
        let r = size_arr - n;
        num.splice(r, 1);
        return num;
    }
}

let input = prompt("enter: ");
let input2 = prompt("enter: ");
console.log(nth_end(input, input2))