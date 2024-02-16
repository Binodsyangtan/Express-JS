const express = require("express");
const app = express();
//jaba uo /api/todos url hit huda yo ()fucntion chalnu paryou

app.get("/api/todos", (req,res) =>{

    console.log("send todos");
    let todos = ["html","css","js","express"];
    res.send(todos);

})
//8000 portchai local host number ho 
app.listen(8000, () =>{
    console.log("server started")
});
