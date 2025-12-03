 const long_palindrome = function(s){
     let len = s.length, max=0, ans ="";
     
     if(len<=1) return s;
     
     for(let i=0; i<len;i++){
         for(let j=1; j < len;j ++){
             
             let start = i, end = j;
             while(start<end && s[start] == s[end]){
                 start++;
                 end--;
             }
             if(start >= end && (j - i + 1)>max){
                 max = j - i + 1;
                 ans = s.slice(i,j + 1);
             }
         }
     }
     return ans;
 }
 
 let str = prompt("enter: ");
 console.log(long_palindrome(str));