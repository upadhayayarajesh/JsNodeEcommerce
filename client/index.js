const express =require('express');
const path=require('path')
require("dotenv").config();


const app= express();



// using ejs as an engine and use view engine as html.
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("public"))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


//middlewares
app.use(express.urlencoded({extended: true}));


app.use(require("./routes/root"))

/*app.get('/',async(req, res) =>{
    res.render("./indexFile/index")
});*/

const port= parseInt(process.env.PORT);


//Server running on 3000.
app.listen(port, () => console.log(`Client started listening on port: ${port}`));