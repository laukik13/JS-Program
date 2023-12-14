let arr = [1,2,3,4,5];   //Array syntx

// let arr2 = new Array(1,2,3,4,5); //also written as 

//array is data structure which is organized for multiple values, array is collection of data of same datatype or any datatype. which is writen in [] and values inside are called elements

//-------------Array method------------

console.log(arr.push(10)); //add element to last position

console.log(arr.pop()); // remove element from last position of Array

console.log(arr.unshift(0)); // add element from first position of Array

console.log(arr.shift()); // remove element from first position of Array

console.log(arr.includes(9)); //return boolean value check value

let arryMany = [1,2,3,[4,5,6],7,8,9,[0]]

console.log(arryMany.flat(Infinity));  // solve other multiple array in one array

//----------------------------------  

console.log(Array.isArray("laukik"));  //check given string value is array and return boolean value

console.log(Array.from("laukik")); //convert string value to array 

let a = 100;
let b = 200;
let c = 300;

console.log(Array.of(a,b,c)); //convert collection of variable in an array



