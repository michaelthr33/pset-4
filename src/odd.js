var readlineSync = require('readline-sync');
const MAX= Number.MAX_SAFE_INTEGER
const MIN= Number.MIN_SAFE_INTEGER
let positive= Number(readlineSync.question("Positive integer: "))
if (positive>MAX||positive<MIN){console.log("Invalid")}
else if (positive>0&&positive<MAX) {let positive= Number(readlineSync.question("Positive integer: "))
