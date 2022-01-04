const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
    res.render("home", { title: "Home", css: ["home.css"] })
})

app.get("/about", (req, res) => {
    res.render("about", { title: "About", css: ["about.css"] })
})


app.listen(3000, () => console.log('Server is running'));