var prefix = function(input){
    
    if(input.length === 0){
    return "";
    }
    let ans = input[0];
    for(let i=1; i<input.length; i++){
        while(input[i].indexOf(ans) !== 0){
            ans = ans.substring(0, ans.length - 1);
            if(ans === ""){
                return "";
            }
        }
    }return ans;
}
let input = ["flower","flow","flight"];
console.log(prefix(input));