const readlineSync = require('readline-sync');
const MAX= Number.MAX_SAFE_INTEGER
const MIN= Number.MIN_SAFE_INTEGER
let value=0
let digit=0
let spacing=",";
let reverse="";
console.log()
do {
  value=(readlineSync.question("Positive Integer: "))
} while(value>=MAX||value<=0||Number.isNaN(value))

do
{
  digit=value % 10;
  reverse=reverse + digit + spacing;
  value=value - digit;
  value=value / 10;
} while(value >= 10)

reverse=reverse + value + "."
console.log();
console.log("" + reverse + "")
console.log()
