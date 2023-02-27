const express = require('express');
const bodyParser = require('body-parser');
const app = new express();

const port = 3000;
var items = ["Eat", "Sleep"];
var workItems = [];
var newListItems = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);


    res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", (req, res) => {
    item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/about", (req,res) => {
    res.render("about");
})

app.get("/work", (req, res) => {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
})

app.post("/work", (req, res) => {
    let item = req.body.workItems;
    items.push(item);

})

app.listen(port, () => {
    console.log("Todo app server started!");
});
