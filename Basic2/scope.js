//-----------------Global Scope-------------------

// var

//------------------Block Scope-------------------

// let 
// const 

// {
    
// }


//Nested Function
// child function can only access parent value but parent cannot get child function value 

function parentValue(){
    const parentName = "parent";

      function childValue(){
        const chlidName = "child";
        console.log(parentName);
      }

    //   console.log(chlidName);
      childValue();
}

parentValue();