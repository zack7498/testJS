'use strict'

let a = [];
let b = [1];
let c = [1, 2];

let d = JSON.stringify(a)
let e = JSON.stringify(b)
let f = JSON.stringify(c)
console.log(JSON.stringify(a));
console.log(JSON.stringify(b));
console.log(JSON.stringify(c));

console.log(JSON.parse(d));
console.log(JSON.parse(e));
console.log(JSON.parse(f));
console.log(JSON.parse(''));