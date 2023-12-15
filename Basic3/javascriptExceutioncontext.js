//----------javascript Exceution Context---------------


//Global Exceution context    // it will complusory execut when code is run

//Function Exceution context  // it will execut when function is call

//Eval Exceution contaxt      // // it will execut when eval() function is call 



 // 1 Memory creation Phase --- // collect all variable and store in MCP

 // 2 Exceution Phase  --- // exceut value to variable // perform exceution

 
//in exceution context if we found function than it will create sperate exceution context  content  (new variable environment) + (exection thread)



 //call stack

//  call stack work as (LIFO) last in first out


 //                     |_________|
 //                     |_________|
 //                     |_________|
 //                     |__Three__|
 //                     |___Two___|
 //                     |___one___|
 //                     |___GEC___|

//  as three() is in top postion(last) and bottom position(first) is (global exceution context)  so after completing its task it will remove top position an than another element one by one
