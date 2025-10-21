var merge = function(text1, text2){
    let i = 0, j = 0;
    let stack = [];
    
    let s1 = text1.split(",").sort((a,b) => a-b)
    let s2 = text2.split(",").sort((a,b) => a-b)
    
    while(i < s1.length && j < s2.length) {
        if(s1[i] <= s2[j]){
            stack.push(s1[i++]);
        }
        else{
            stack.push(s2[j++]);
        }
    }
        while (i < s1.length){
        stack.push(s1[i++]);
    }
    while (j < s2.length){
        stack.push(s2[j++]);
    }
    return stack;
}
let text1 = prompt("enter list1 (comma separated): "); // "1,2,4"
let text2 = prompt("enter list2 (comma separated): "); // "1,3,4"
console.log(merge(text1, text2)); // Output: [1, 1, 2, 3, 4, 4]
