const express = require("express");
const app = express();

let todos = [
  {
    id: 1,
    title: "html",
    status: true,
  },
  {
    id: 2,
    title: "css",
    status: false,
  },
];


app.use( express.json() ) // sets up req.body // () =>{  return (req,res,next) =>{ req.body = postman body }  }

const createtodos = (req, res) => {
    console.log(req.body)

    /* input validation */

    todos.push(req.body.title);
    return res.send("todos creatred");
}
app.use(express.json()); // sets up req.body // () =>{  return (req,res,next) =>{ req.body = postman body }  }

const createTodos = (req, res) => {
  let inputTitle = req.body.title?.trim();

  if (!inputTitle) {
    return res.status(400).send({
      errors: [
        {
          key: "title",
          msg: "this field is required.", // TODO: send already exits
        },
      ],
    });
  }

  // let matched = todos.find(el =>el === inputTitle) // html
  let matched = todos.some((el) => el === inputTitle); // true

  if (matched) {
    return res.status(400).send({
      errors: [
        {
          key: "title",
          msg: "already exists",
        },
      ],
    });
  }

  /* input validation */

  todos.push(req.body.title);
  return res.send("todos creatred");
};

app.get("/api/todos", (req, res) => {
  console.log("response: list of todos ss.");
  res.send(todos);
});

app.put("/api/todos", (req, res) =>{

    
    todos = todos.map((el => {
        if(el.id == req.params.id){
            let newData = {
                title:req.body.title,
                status: req.body.status,
                
            };
            return newData;
        }
        else{
            return el;
        }
    }))
    
})

app.listen(8000, () =>{
    console.log("server started")
});
