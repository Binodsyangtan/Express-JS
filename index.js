const express = require('express')
const app = express()

app.get("/api/todos",(req,res) =>{
    console.log("send todos.")
    let todos = ["html", "css", "js"]
    res.send(todos)

})

app.listen(8000, () =>{
    console.log("server started.");
});