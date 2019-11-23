var readlineSync = require('readline-sync');
const MAX= Number.MAX_SAFE_INTEGER
const MIN= Number.MIN_SAFE_INTEGER
let positive=0
let sum=0
let counter=0
let message=""
 do
 {
  positive=Number(readlineSync.question("Positive Integer: "))
    while(counter<positive)
  {
    if(positive%counter==0)
    postitive=String(positive)
    message=message+positive
  }
  counter=counter+1
}
  while(positive<0&positive>MAX)

  console.log(message)
