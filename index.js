/* 
    Global object
    -console
    - __dirname
    - __filename

    Node Modules
    - third party
        eg:axios, bcrypt, nodemon
    - core
        eg:
    - local


*/

const { hash } = require("bcrypt")


function signup(username,email,password){
    bcrypt.hash(password, 10, function(err, hash) {

    let data = {
        "username":username,
        email,
        password:hash;
    }
    console.log("storein DB", data)
});
    
}
signup("ram","ram@gmail.com","password")
