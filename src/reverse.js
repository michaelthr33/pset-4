var readlineSync = require('readline-sync');
const MAX= Number.MAX_SAFE_INTEGER
const MIN= Number.MIN_SAFE_INTEGER
let positive="hello"
do {
  positive=(readlineSync.question("Positive Integer: "))
} while(positive>=MAX||positive<=0)

let length=positive.length;
positive=Number(positive);
length=length-1

let ceiling=(Math.pow(length,10))
let firstvalue=Math.ceil(ceilings);
positive=positive-firstvalue

while (length>0){
  length=length-1
  
}
