var per = function(input){
    
    let arr = input.split(",").map(Number);
    let length = arr.length;
    let peak;
    for(let i = length; i>=0; i--){
        if(i === 0){
            peak = i;
            break;
        }
        if(arr[i] > arr[i - 1]){
            peak = i;
        }
    }
    
    for(let j = length - 1; j>=0; j--){
        if(arr[j] > arr[peak - 1]){
            let temp = arr[j];
            arr[j] = arr[peak - 1];
            arr[peak - 1] = temp;
            break;
        }
    }
    let start = peak;
    let end = arr.length-1;
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start ++
        end --
    } return arr;
}
let input = prompt("enter: ");
console.log(per(input))

