import { testimonialModel } from "../db/models/testimonialSchema.js";

export const testimonialController = {
    async getAllTestimonials(request, response) {
        try {
            const res = await testimonialModel.find();
            response.json(res);
        }
        catch (err) {
            response.json({ message: "data not received" })
            console.log(err);
        }
    }
}