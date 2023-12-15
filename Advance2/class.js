//---class---
// A class is a blueprint for creating objects with shared properties and methods


class User{
    constructor(username,password){              //constructor
       this.username = username
       this.password = password
    }

      encryptPassword(){                          //method
        return `$/1${this.password}Afz`
      }

}

const data = new User("Laukik","laukik2313");    //New call the constructor
// console.log(data);
// console.log(data.encryptPassword());
