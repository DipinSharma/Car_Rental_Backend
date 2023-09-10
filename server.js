import express from "express";
import cors from 'cors';
import { carRoutes } from "./routes/carsRoutes.js";
import { testimonialRoutes } from "./routes/testimonialRoutes.js";
const app=express();
app.use(express.json());
app.use(cors());
app.use('/',carRoutes);
app.use('/',testimonialRoutes);
app.use((req,res)=>{
    res.json({message:"invalid url"});
})
const server=app.listen(1234,(err)=>{
    if(err){
        console.log("server crashed ",err);
    }
    else{
        console.log("server is running at ",server.address().port);
    }
})