import _ from 'lodash';

const original = { a: 1, b: { c: 2 } };
const deepCopy = _.cloneDeep(original);

deepCopy.b.c = 4;

console.log(deepCopy);  // Output: { a: 1, b: { c: 4 } }
console.log(original);  // Output: { a: 1, b: { c: 2 } }
