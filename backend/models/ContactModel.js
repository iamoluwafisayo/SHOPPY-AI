import Joi from "joi";

const contactSchema = Joi.object({
    name: Joi.string().required(),
    message: Joi.string().required(),
    email: Joi.string().email().required(),
    subject: Joi.string().default("No subject"),
    
});
export default contactSchema;