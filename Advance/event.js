//event propogation

//Two type of context in event propogation:-
//event bubbling
//event capturing

//it is used to bubble the event  

document.addEventListener("click",(e)=>{
    e.stopPropagation();   // it is method which is used to stop call of over the bubbling
    console.log("Hello world");
},false)

//it is event capturing 

document.addEventListener("click",()=>{
    console.log("Hello world");
},true)