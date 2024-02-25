
/* yesma code lekhne sajilo ko lagi and terminal mah gayara paste garni  */

db.createCollection("book") //create harna lai batabase 
db.books.insertOne({name: "html", isbn: 23232}) //batabase insert garna lai use garxa
db.books.insertMany([
    {name: "html", isbn: 23232},
    {name: "python", isbn: 23232},
    {name: "python", isbn: 23232, genra:"self-help"},
])  //yesley multiple insert garna dinxa so array with object ko roop mah 

db.books.find() //yesle chai find or show garxa badabase in terminal

db.list.insertMany([
    {
        name: "iron man",
        genra: "super herp",
        collection: "1B$"
    },
    {
        name: "iron man 2",
        genra: "super herp",
        collection: "500M$"
    },
    {
        name: "iron man 3 ",
        genra: "super herp",
        collection: "1.5B$"
    }
    
    
])

//for update

db.list.find( { collection:  "1.5B$"} ) 

db.list.updateOne( { collection:  "1.5B$" }, { $set: { collection: "2B$" } } ) 

db.list.find({name:"iron man 2"})
db.list.updateOne({genra:"super herp"},{ $set: {genra:"super hero"}})

//for delete
db.list.deleteOne({genra:"sci-fi"})
db.list.deleteMany({genra:"super hero"})