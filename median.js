var median = function(){
let a = prompt("enter a  "); //123
let b = prompt("enter b  ");

let aa = a.split(",").map(Number); // [1,2,3]
let bb = b.split(",").map(Number);

let c = aa.concat(bb).sort((a,b) => a-b); // c[ ] = a[ ] + b[ ]

let length = c.length;
let mid = Math.floor(length/2);

let r;
if (length % 2 == 0)
{
 r = (c[mid] + c[mid - 1]) / 2;  
 console.log(r)
}
else
{
 r = c[mid];
    console.log(r)
}
}
median();