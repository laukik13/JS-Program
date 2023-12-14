//---lexical scoping---

// Child function can access parent function variables but parent cannot access child function variables
// two child function in parent function than child function cannot share there variables

//---closure---

//when you return whole function it not only return that function it return its scope(lexical scope)



function myFun(name){
//    console.log(name);

function inner(){
    console.log(name);
}
  return inner();
}

console.log(myFun("laukik"));

// const name = myFun("laukik");
// console.log(name);