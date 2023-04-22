import express from "express";
import mongoose from "mongoose";

let app:express.Application = express();


let userSchema = new mongoose.Schema({

    name: String,
})

let USER = mongoose.model("User", userSchema);


app.get("/about", async(req:express.Request, res:express.Response) => {

    try{

        await mongoose.connect("mongodb+srv://villegasalrandolph:ViLLEGAS_AR2846@cluster0.owih4qv.mongodb.net/usersDB")
        

        let users = await USER.find();

        res.send(users);

    }catch(error){


        console.log(error);
        
    }
})

app.listen(5000, () => {

    console.log(`Server is running on port 5000...`);
    
})

