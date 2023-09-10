import dotenv from "dotenv"
dotenv.config();
const URL=process.env.URL;
import mongoose from 'mongoose';
const promise=mongoose.connect(URL);
promise.then(data=>{
    console.log("DB connected ...");
})
.catch(err=>{
    console.log("error in connection ",err);
})
export default mongoose;