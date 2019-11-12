var readlineSync = require('readline-sync');
const MAX= Number.MAX_SAFE_INTEGER
const MIN= Number.MIN_SAFE_INTEGER
let lowerbound = Number(readlineSync.question("Lower bound: "));
let upperbound = Number(readlineSync.question("Upper bound: "));
if (upperbound>MAX||lowerbound>MAX||upperbound<MIN||lowerbound<MIN){console.log"Invalid"}
else if (lowerbound>=upperbound) {let lowerbound = Number(readlineSync.question("Lower bound :"));
let upperbound = Number(readlineSync.question("Upper bound: "));
}
