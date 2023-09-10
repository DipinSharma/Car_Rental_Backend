import express from "express";
import { carController } from "../controller/carRentalController.js";

export const carRoutes=express.Router();
carRoutes.get('/cars',carController.getAllCars);