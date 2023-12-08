//------------------------for loop--------------------------

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

//-----------------------while loop-----------------------

const num =  10;

let a =0;

while(a < num){
    // console.log(a);
    a++;
}

//-----------------------do while-------------------------

do {
    // console.log(`my number is ${a}`)
     a++;
} while (a < num);

//for of (array)

const myArray = [1,2,3,4,5];

for (const i of myArray) {
    if(i === 5){
        // console.log("Hello World")
    }
    // console.log(i);
}

//-----------------------Map---------------------------

const map = new Map();

map.set('IN',"India");
map.set('USA',"United State Of America");

// console.log(map);

//for in (object)

const newObj = 
    {
        jv: "Java",
    
        py: "python",
    
        js: "Javascript"
    }

for (const key in newObj) {
        // const element = newObj[key];
        // console.log(element);

        // console.log(`key : ${key} value is ${newObj[key]}`);
        
}

//------------------------For each--------------------------

const myArr = [1,2,3,4,5];


myArr.forEach((element ,index ,arr) => {
    // console.log(element , index , arr);
});


//-------------------------filter----------------------------

const myNum = [1,2,3,4,5,6,7,8];

// const newNums = myNum.filter((num)=>(          //when use () / nothing in call back function no need to write return keyword to return value
//    num > 4)   
// )

const newNums = myNum.filter((num)=>{              //when use {} in call back function you need to write return keyword to return value
     return num > 4;
})


// console.log(newNums);

//--------------------array map---------------------------

    const newNumss = myNum.map((num)=> num + 10);

// console.log(newNumss);


//chaining in map

const newMap = myNum.map((num)=>(num*10)).map((num)=>(num + 1)).filter((num)=>( num>30));

// console.log(newMap);

 //----------------------reduce-------------------------------

const newReduce  = myNum.reduce((acc,num)=> (acc + num),0);  //it is use to calculate total of all num  it is usally use for eg:- total pricing , total shoppin amount 

console.log(newReduce);

