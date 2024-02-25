const express = require('express');
const app = express();
app.set("view engine", "ejs");

app.get('/', function(req,res){
    res.send('hello  binod');
})
app.get('/profile/:username', function(req,res){
    res.send(`hello form ${req.params.username}`); //hamile send gareko :username  sab username mah store huxna browser mah and hamilai tyo store vako kura need vayama req ko marfat pauxa jasxa and(params vaneko parameter req ko vitra params ko vitra username ho )
})

app.listen(7000);
