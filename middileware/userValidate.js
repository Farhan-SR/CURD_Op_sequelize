const Joi = require("joi");

const userSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(6),
    age: Joi.number(),
    mobileNumber: Joi.number(),
    isActive: Joi.boolean().default(true)

})

module.exports = { userSchema }


