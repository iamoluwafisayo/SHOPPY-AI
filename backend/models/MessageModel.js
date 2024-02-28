import e from "express";
import Joi from "joi";

const msgSchema = Joi.object({
    message: Joi.string().required(),
    sender: Joi.string().email().required(),
    //receiver: Joi.string().min(3).max(30).required()
});
export default msgSchema;