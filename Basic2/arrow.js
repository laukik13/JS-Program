// this // current context  

// this keyword is use to access current value 
// It is use only in object and not in function

//----------------explist return----------------

const result = (num1,num2) => {
    return num1 + num2
}

// when you use {} in function you need  return value to fetch that return is called explist return


//----------------implist return---------------- 

const result2 = (num1,num2) => (num1 + num2);

// when you not use {} in arrow function and use () you need no return (keyword) value to fetch that return ,that is called implist return