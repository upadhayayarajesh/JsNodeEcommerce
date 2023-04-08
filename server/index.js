const express = require('express');
const path = require('path');
require("dotenv").config();
const  mongoConnection= require("./db/connect")

const app= express();

// connection to mongoDB
mongoConnection()


//using ejs as engine
//middleware.
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("public"))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.urlencoded({extended:true}));

//server running on port 5000.
const port= parseInt(process.env.PORT);
app.listen(port, ()=>console.log(`Server started listening on port: ${port}`));
app.get("/",async (req,res)=>{
    res.send(`Hello from server.`)
});