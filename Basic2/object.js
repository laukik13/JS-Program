 //basic syntx how to write object

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
