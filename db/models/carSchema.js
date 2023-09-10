import mongoose from "../connection.js";
import {SchemaTypes} from 'mongoose'
const CarSchema=new mongoose.Schema({
    image:{type:SchemaTypes.String,required:true},
    brand:{type:SchemaTypes.String,required:true},
    model:{type:SchemaTypes.String,required:true},
    transmission:{type:SchemaTypes.String,required:true},
    fuel:{type:SchemaTypes.String,required:true},
    price:{type:SchemaTypes.Number,required:true}
})
export const CarModel=mongoose.model('car',CarSchema);