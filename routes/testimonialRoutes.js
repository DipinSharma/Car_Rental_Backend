import express from "express";
import { testimonialController } from "../controller/testimonialController.js";

export const testimonialRoutes=express.Router();
testimonialRoutes.get('/getAllTestimonials',testimonialController.getAllTestimonials);