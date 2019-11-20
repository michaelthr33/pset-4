var readlineSync = require('readline-sync');
const MAX= Number.MAX_SAFE_INTEGER
const MIN= Number.MIN_SAFE_INTEGER
let value=0
let digit=0
let scinot=0
let odd=0

do {
  positive=(readlineSync.question("Positive integer: "))
}
while (positive<=0||positive>MAX);

let number = Number(positive);
let length=(positive.length);
length=Number(length);
length= length-1;
scinot= Math.pow(10,length);
value= number/scinot;
digit= Math.ceil(value);

while (length>0)
{
  length=length-1;
  value=value*10;
  digit=Math.ceil(value);
  if (digit%2>0||digit%2<0) {odd=odd+digit};
 }
console.log(""+odd+".");
