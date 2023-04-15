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

//middlewares
app.use(express.urlencoded({extended: true}));

app.use(require("./routes/addUser"));
app.get("/",async (req,res)=>{
    res.send(`Hello from server.`)
});


const port= parseInt(process.env.PORT);
app.listen(port, ()=>console.log(`Server started listening on port: ${port}`));
