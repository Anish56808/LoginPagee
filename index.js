const express = require("express");
const app= express();
app.set("view engine","ejs");

const path= require("path");
app.set("veiws",path.join(__dirname,"./views"));
app.use(express.static(path.join(__dirname,"./public")));
let port= 5050;
app.listen(port,()=>{
    console.log("app is listining");
})

app.get('/ToDo',(req,res)=>{
    console.log("connection estabilsed");
    res.render("home.ejs");
})

