//--------Immediately Invoked Function Expressions (IIFE)---------

// Due to  problem Occur from global scope pollution to caure the pollution from global variable or any declartion 

(function sayMyName(){
    console.log("Laukik palekar");
}
)();  // to end iife you need to close with ; it is important



((fullName)=>{           

    console.log(`My name is ${fullName}`);

})("john cena");  //to pass a argument 



