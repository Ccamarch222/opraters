"use strict";
let a = 5;
let b = 10;
console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);
// Swap values without using a third variable
[a, b] = [b, a];
console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);
