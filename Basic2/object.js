 // ---object---

//  Object is a complex data type that allows you to store and organize data. 
//  Objects are used to represent real-world entities, and they consist of properties and methods.
//  Properties are key-value pairs that store data, and methods are functions associated with the object
 
 //basic syntx how to write object

 //object are written in object literal form closed in {}

const obj = {
    name: "laukik",
    age: 23,        
    hobby: "cricket",
    isActive: false
}

// console.log(obj);

// Object.freeze(obj);    //freez object to not change the value

obj.name = "Laukik Palekar"  


//-----------function in object-------------

obj.greeting = function() {
    console.log("Hello user")
    // let a = "Hello user";
    // return a
}

// console.log(obj.greeting())

//-------------object assign method---------------
//It add seprate declare object into one
//but use spread opreator insted assign method

const obj1 ={a : 1,b: 2};
const obj2 = {c : 3,d: 4};

const objn = Object.assign({},obj1,obj2);

console.log(objn);

//-----------------------------------------------

const  course = {
    courseName : "BSC-IT",
    duration: "3 years",
    facultyName : "Mrs.Reenu"
}

console.log(course.courseName);  //Simple way to access value from object //used dot notation to access value from object 

// Another way is Object Distructing

const {courseName,duration,facultyName} = course;

console.log(courseName);  //getting value from object after distructing formate

//------------------------------------------------
 
 


