var readlineSync = require('readline-sync');
const MAX= Number.MAX_SAFE_INTEGER
const MIN= Number.MIN_SAFE_INTEGER
let value=0
let digit=0
let scinot=0
let odd=0
let number=1
let length=0
do {
  positive=(readlineSync.question("Positive integer: "))
  number = Number(positive);
}
while (number<0||number>MAX||Number.isNaN(number));

length = (positive.length);
length = Number(length);
length = length-1;
scinot = Math.pow(10,length);
value = number/scinot;

while (length>=0)
{
  digit = Math.floor(value);
  value = value-digit;
  value = value*10;
  length = length-1;

  if (digit%2>0||digit%2<0) {odd=odd+digit;}
 }
console.log(""+odd+".");
