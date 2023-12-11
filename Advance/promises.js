  //Promise
     
  
  
  
  
  const promiseOne = new Promise((resolve,reject)=>{ 
 
    setTimeout(()=>{
        resolve({
            username: "laukik",
            password: "laukik2341"
        })
    },100);

  })

  promiseOne.then((user)=>{
    //    console.log(user);
  })