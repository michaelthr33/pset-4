
const readlineSync = require("readline-sync");
const MAX=Number.MAX_SAFE_INTEGER;
const MIN=Number.MIN_SAFE_INTEGER;
let number=0
console.log()
do
{
  number=Number(readlineSync.question("Height: "))
} while(number<1||number>24||Number.isNaN(number))
console.log()
if(number>=1){console.log("                      ## ##")}
if(number>=2){console.log("                     ### ###")}
if(number>=3){console.log("                    ####  ####")}
if(number>=4){console.log("                   #####  #####")}
if(number>=5){console.log("                  ######  ######")}
if(number>=6){console.log("                 #######  #######")}
if(number>=7){console.log("                ########  ########")}
if(number>=8){console.log("               #########  #########")}
if(number>=9){console.log("              ##########  ##########")}
if(number>=10){console.log("            ###########  ###########")}
if(number>=11){console.log("            ############  ############")}
if(number>=12){console.log("           #############  #############")}
if(number>=13){console.log("          ##############  ##############")}
if(number>=14){console.log("         ###############  ###############")}
if(number>=15){console.log("        ################  ################")}
if(number>=16){console.log("       #################  #################")}
if(number>=17){console.log("      ##################  ##################")}
if(number>=19){console.log("     ###################  ###################")}
if(number>=20){console.log("    ####################  ####################")}
if(number>=21){console.log("   #####################  #####################")}
if(number>=22){console.log("  ######################  ######################")}
if(number>=23){console.log(" #######################  #######################")}
if(number>=24){console.log("########################  ########################")}
console.log()
