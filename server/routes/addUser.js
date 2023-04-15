const router = require("express").Router();
const user= require("../models/users.js");

//routes
router.post(
    "/add/user", async (req,res)=>{
        const{first_name,last_name,email,phone,password}= req.body;
        // @TODO password field must be hashed from the some js library.
        const newUser= new user({first_name,last_name,email,phone,password});
        newUser.save()
            .then(() => {
                console.log("Successfully added user ot mongodb");
                res.redirect("/");
            })
            .catch((err) => console.log(err));
        console.log("FirstName:", first_name);
       res.redirect("http://localhost:5000/")
    }
)

module.exports=router;