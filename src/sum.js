var readlineSync = require('readline-sync');
const MAX= Number.MAX_SAFE_INTEGER
const MIN= Number.MIN_SAFE_INTEGER
let lowerbound=0
let upperbound=1

do {
 lowerbound = Number(readlineSync.question("Lower bound: "));
 upperbound = Number(readlineSync.question("Upper bound: "));
} while (lowerbound >= upperbound)


if (upperbound>MAX||lowerbound>MAX||upperbound<MIN||lowerbound<MIN){console.log("Invalid")}

let sum = 0;
let counter = sum * 2
while(lowerbound<=upperbound){
  if(lowerbound%2>=0&&lowerbound%2<=0){sum=sum+lowerbound;
  }lowerbound++;}

console.log(''+sum+'.')
