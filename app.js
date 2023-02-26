const express = require('express');
const bodyParser = require('body-parser');
const app = new express();

const port = 3000;
var items=["Eat","Sleep"];
var newListItems=[];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");

    var today = new Date();

    var options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    
    var day = today.toLocaleDateString("en-US",options);


    res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", (req,res) =>{
    item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(port, () => {
    console.log("Todo app server started!");
});
