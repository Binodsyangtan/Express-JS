/* 
    Status code 
        2 200,201,203,204 - success
        3: redirect 
        4: client error
            400 - bad request
            401- unauthorized // not logged in 
             403  //
            404 - resource not found 



*/

const express = require("express")
const { lookupDatum } = require("json")
const app = express()
let todos = ["html","css"]
let loggedIn = false
/* 
api call huni vanda aaghi nai run hune garxa middleware 
    middleware
        -simply a function which has access to req and res
*/
function checkAuthentication(req,res,next){
    if(!loggedIn){
        res.status(401).send()
    }
    console.log("checkAuthentication");
    next()
    
}
app.use(checkAuthentication)  //global middle-ware

//GET KO LAGI
app.get("/api/todos",(req,res) =>{
    console.log("response: list of todos ss.");
    res.send(todos)
})

//POST KO LAGI 
app.post("/api/todos",(req,res) =>{
    if(loggedIn){
        todos.push("git")

        // console.log("response: create of todos ss.");//test garera console hataune
      return res.send("todos created")
    }
    //else ko satta direct lekheko ho 
    res.status(401).send({
        message: "Unauthorized",
        
    })
})

//FOR DELETE ofr 201 status code which no content vanera dekhauxa
app.delete("/api/todos/reset",(req,res) =>{
    if(loggedIn){
        todos = []
      return res.send(204).send()
    }
    res.status(401).send({
        message: "Unauthorized",
        
    })
})

app.listen(8000, () =>{
    console.log("server started...");
})
 
