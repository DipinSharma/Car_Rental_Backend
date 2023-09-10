import { CarModel } from "../db/models/carSchema.js";
export const carController = {
    async getAllCars(request, response) {
        try {
            const res = await CarModel.find();
            response.json(res);
        }
        catch (err) {
            response.json({ message: "data not received" })
            console.log(err);
        }
    }
}