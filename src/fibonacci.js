var readlineSync = require('readline-sync');
const MAX= Number.MAX_SAFE_INTEGER
const MIN= Number.MIN_SAFE_INTEGER
let positive=0
let counter=1
let a = 0
let b = 1
let placeholder=0
console.log()
do
{
  positive=Number(readlineSync.question("Positive integer: "))
} while(positive<1||positive>78||Number.isNaN(positive))

while(positive>0)
{
  placeholder=a
  a=a+b;
  b=placeholder
  positive=positive-1
}
console.log( )
console.log(a)
console.log()
