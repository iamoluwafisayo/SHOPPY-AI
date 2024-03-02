import Joi from "joi";

const msgSchema = Joi.object({
    message: Joi.string().required(),
    userId: Joi.string().email().required(),
    chatId: Joi.string().required(),
    role: Joi.string().valid("user", "assistant").required(),
});
export default msgSchema;
