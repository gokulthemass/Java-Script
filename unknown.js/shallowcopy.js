const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };

shallowCopy.b.c = 4;

console.log(shallowCopy);  // { a: 1, b: { c: 4 } }
console.log(original);     // { a: 1, b: { c: 4 } }
