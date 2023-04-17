const mongoose = require("mongoose");
const userSchema= new mongoose.Schema(
    {
        first_name: {type: String},
        last_name: {type: String},
        email: {type: String},
        phone: {type: String},
        password: {type: String},
    },
    {collection: "users"}
);
module.exports=mongoose.model("users",userSchema);