class User{
    constructor(username,password){              //constructor
       this.username = username
       this.password = password
    }

      encryptPassword(){                         //method
        return `$/1${this.password}Afz`
      }

}

const data = new User("Laukik","laukik2313");    //new call the constructor
// console.log(data);
// console.log(data.encryptPassword());
