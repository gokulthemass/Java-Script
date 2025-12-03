
// var hash = function(a){
//     let seen = new Map();
//     for(let i=0; i<a.length; i++){
//         if(seen.has(a[i])) return a[i];
//         else seen.set(a[i]);
//     } return;
// }
// let a = [1,2,3,4,5,6,6];
// console.log(hash(a));


// Contains Duplicate
// Given an array of integers, return true if any value appears at least twice, and false if every element is distinct. (Use a Set / Map to track seen numbers.)

// var dup = function(a){
//     let seen = new Map();
//     for(let i=0; i<a.length; i++){
//         if(seen.has(a[i])){
//             return true;
//         }
//         seen.set(a[i]);
//     } return false;
// }
// let a =[1,2,3,4,4]
// console.log(dup(a));


// Two Sum
// Given an array of integers and a target, return indices of the two numbers that add up to the target. Use a Map to store number → index. 

// var twosum = function(a, target){
//     let stack = new Map();
//     for(let i=0; i<a.length; i++){
//         let sun = target - a[i];
//         if(stack.has(sun)) return [stack.get(sun), i];
//         stack.set(a[i], i)
//     } return [];
// }
// console.log(twosum([1,2,3,4,5], 5));


// Valid Anagram
// Given two strings, decide if one is an anagram of the other. Use a hash map for character counts. 


// var anagram = function(s, t){
//     let count = new Map();
//     for(let i=0; i<s.length; i++){
//         count.set(s[i], (count.get(s[i]) || 0) + 1);
//     }
//     for(let j=0; j<t.length;j++){
//         if(!count.has(s[j])) return false;
//         const com = count.get(s[j]) - 1;
//         if(com === 0) count.delete(s[j]);
//         else count.set(s[j], com)
//     }return count.size === 0;
// }
// console.log(anagram("banana", "ananab"));


// First Unique Character in a String
// Return the index of the first non-repeating character in a string (or -1 if none). Use a map for frequencies.


// var unique = function(s){
//     let map = new Map();
//     for(let i=0; i<s.length; i++){
//         map.set(s[i], (map.get(s[i]) || 0) + 1);
//     }
//     for(let i=0; i<s.length; i++){
//         if(map.get(s[i]) === 1) return i;
//     } return -1;
// }
// console.log(unique("ananab"));



// Intersection of Two Arrays
// Return the intersection (unique elements) of two integer arrays. Use a Set / Map.

// var dup = function(s, t){
//     let map = new Map();
//     for(let i=0; i<s.length; i++){
//         map.set(s[i]); 
//     }
//     let stack = [];
//     for(let i=0; i<t.length; i++){
//         if(map.has(t[i])){
//             stack.push(t[i]);
//             map.delete(t[i]);
//         }
//     } return stack;
// }
// console.log(dup([1,2,3,4], [3,4,5,6]));



// Subarray Sum Equals K
// Count the number of subarrays whose sum equals k. Use prefix sum + hash map of prefixSum → frequency.



// var sum = function(s, t){
//     let map = new Map();
//     let sum = 0; let count = 0;
//     for(let i=0; i<s.length; i++){
//     sum = sum + s[i];
//     const sub = sum - t;
//     if(map.has(sub)){
//         count = count + map.get(sub)
//     }
//     map.set(sum, (map.get(sum) || 0) + 1);
//     } return count;
// }
// console.log(sum([1,2,3,4,5,6,7], 7));


