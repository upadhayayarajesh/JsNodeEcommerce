const router =require("express").Router()

router.get("/",async (req,res) =>{
    res.render("./indexFile/index")
})
module.exports= router;
