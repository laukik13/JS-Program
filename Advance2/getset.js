class user{

    constructor(username,password){
            this.username = username
            this.username = password
    }

get username(){
    return `Hello ${this._username}`
}

set username(value){
    this._username = value
}

}


const data = new user("Laukik" ,"laukik2313");
console.log(data.username);
