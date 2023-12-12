
function setUsername(username){

    this.username = username
    // console.log("called")

}

function createUsername(username,email,age){
      setUsername.call(this,username);
      this.email = email
      this.age = age
}

const data = new createUsername("laukik","laukik@gmail.com",23);
console.log(data);

//call method is used to call function in another function 