  //Promise
     
  //A Promise represents the eventual completion or failure of an asynchronous operation
  
  
  const promiseOne = new Promise((resolve,reject)=>{ 
 
    setTimeout(()=>{
        resolve({
            username: "laukik",
            password: "laukik2341"
        })
    },1000);

  })

  promiseOne.then((user)=>{
    //    console.log(user);
  })