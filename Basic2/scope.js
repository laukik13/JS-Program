//-----------------Global Scope-------------------

// var

//------------------Block Scope-------------------

// let 
// const 

// {
    
// }

//Any condition or reason statement like if-else,switch,for, contant block scope 


//-------------------Nested Function-------------------

// child function can only access parent value but parent cannot get child function value 

function parentValue(){
    const parentName = "parent";

      function childValue(){
        const chlidName = "child";
        console.log(parentName);
      }

      console.log(chlidName);   //here parent component cannot access child values
      childValue();
}

parentValue();