const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json()) //yesley 

mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
  .then(() => console.log('Connected!'));

const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: String,  //strring and number vaneko mongoose ko datatype ho 
    isbn: Number,

});

const Book = mongoose.model("Book",BookSchema)   //accessing model web mah herni 

app.get("/api/books", (req,res) =>{
    Book.find().then((data) =>{
        console.log(data);
        res.send(data);
    })
    
})

app.post("/api/books",(req,res) =>{
    Book.create({title:req.body.title, isbn:req.body.isbn}).then((book) =>{ 
        res.send()
    })

})

app.listen(8000, ()=>{
    console.log("server stated.");
})
