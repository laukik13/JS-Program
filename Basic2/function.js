 //Basic syntx of function 
//  function keyword at starting witting function name afterward with () and fuctionscope {}
// It is help write some code to use it again, just wrapped code in package and call it when you need

 function sayName(){
    console.log("l");
    console.log("a");
    console.log("u");
 }

//  sayName(); //funciton name work as refrence here and () work as exicution

 //------------------------------------------------

 function addTwoNumber(num1,num2){      //elements called in function name () is called paremeter

    console.log(num1 + num2);
    
 }

// addTwoNumber(4,5);   //elements called in function name () is called argument

//------------------------------------------------------

function numValue(num1,num2){

  return num1 + num2 ;

}

// numValue(4,5); //when you use return to get value from function you cant access direct with function call


let result  = numValue(4,5);  //you need to store value to in variable and then console it 

console.log(result);  /* || */  console.log(numValue(4,5));    // you can call in both way

 