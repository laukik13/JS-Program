 //Basic syntx of function 

// function is fundamental building block of the language.
// It is help to write efficent code to use it again, just wrapped code as a package and call it when you need
// function keyword at starting witting function name afterward with () and functionscope {}


 function sayName(){
    console.log("l");
    console.log("a");
    console.log("u");
 }

//  sayName(); //funciton name(sayName) work as refrence and () work as exicution

 //------------------------------------------------------

 function addTwoNumber(num1,num2){      //here elements called inside () after function keyword is called as paremeter

    console.log(num1 + num2);
    
 }

// addTwoNumber(4,5);   // here elements called inside function name () is called as argument

//------------------------------------------------------

function numValue(num1,num2){

  return num1 + num2 ;

}

// numValue(4,5); //when you use return to get value from function you can't access direct with function call
//you need to store value to in variable and then console it

let result  = numValue(4,5);   

console.log(result);  /* || */  console.log(numValue(4,5));    // you can call in both way

 