const mongoose = require("mongoose");
const MONGOURI=process.env.MONGO_URL;


connect = async () => {
    try {
        //database = pos-system
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected to mongodb");
    } catch (error) {
        console.error("Failed to connect to mongoDB", error);
    }
};

module.exports=connect;