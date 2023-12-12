class User {

    constructor(username){
        this.username = username
    }

    logMe(){
       return `Hello ${this.username} !!`
    }

}


class Student extends User{

constructor(username,email,password){
    super(username)                //to get contructor from superclass(User) we use Super Keyword
    this.email = email
    this.password = password
}

   logIn(){
         return `you logged in successfully ${this.username}`
   }

}

const data = new Student("Laukik","laukik@gmail.com","laukik2313");

// console.log(data);

// console.log(data.logIn());

// console.log(data.logMe());

const data2 = new User("Laukik")

// console.log(data2);

// console.log(data2.logMe());

// console.log(data2.logIn());






