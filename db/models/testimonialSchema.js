import mongoose from "../connection.js";
import {SchemaTypes} from 'mongoose'
const testimonialSchema=new mongoose.Schema({
    image:{type:SchemaTypes.String,required:true},
    name:{type:SchemaTypes.String,required:true},
    location:{type:SchemaTypes.String,required:true},
    review:{type:SchemaTypes.String,required:true},
})
export const testimonialModel=mongoose.model('testimonial',testimonialSchema);