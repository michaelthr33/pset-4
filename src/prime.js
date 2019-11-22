var readlineSync = require('readline-sync');
const MAX= Number.MAX_SAFE_INTEGER
const MIN= Number.MIN_SAFE_INTEGER
let positive =0
let prime=0
let divide=2
do
{
  positive=Number(readlineSync.question("Non-negative integer: "))
  if (positive>=0&positive<=MAX)
  {
    while(divide<positive&prime==0)
    {
      if(positive%divide==0){prime=1}
      divide=divide+1
    }
  }
} while (positive<0||positive>MAX)

if(prime==1){console.log("Not prime.")}
if(prime==0){console.log("Prime.")}
