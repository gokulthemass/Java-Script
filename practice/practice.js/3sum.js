let three = function(input){
    
    let arr = input.split(",").map(Number).sort((a,b) => a-b);
    let res = [];
    
    for(let i=0; i<arr.length; i++){
        if(i>0 && arr[i] === arr[i - 1]){
            continue;
        }
        
        let j = i + 1; let k = arr.length - 1;
        
        while(j<k){
            let t = arr[i] + arr [j] + arr[k];
            if(t < 0){
                j++
            }
            else if(t > 0){
                k--
            }
            else{
                res.push([arr[i], arr[j], arr[k]])
                j++
                while(arr[j] === arr[j + 1] && j<k){
                    j++
                }
            }
        }
    }return res
}
let input = prompt("enter: ");
console.log(three(input))