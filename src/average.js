var readlineSync = require('readline-sync');
const MAX= Number.MAX_SAFE_INTEGER
const MIN= Number.MIN_SAFE_INTEGER
let positive=0
let sum=0
let counter=0
 do{
   positive =Number(readlineSync.question("Non-negative integer: "))
   if(positive>=0&positive<=MAX){
     sum=sum+positive;
     counter=counter+1;
 }
} while(positive>=0&positive<MAX);
let average= sum/counter
console.log(average)
