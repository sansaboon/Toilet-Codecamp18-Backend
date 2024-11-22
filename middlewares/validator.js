const Joi = require("joi")
const createError = require("../utils/create-error")

const registerSchema = Joi.object({
    email: Joi
    .string()
    .email({tlds:false})
    .required()
    .messages({
        "string.empty": "Email is required"
    }),
    password: Joi.string()
    .required()
    .pattern(/^[0-9a-zA-Z]{6,}$/)
    .message({
        "string.empty" : "Password is required!!!",
        "string.pattern.base" : "password must contain a-z A-Z 0-9 and must be at least 6 characters.!!!"
    }),
    confirmPassword: Joi.string()
    .required()
    .valid(Joi.ref("password"))
    .messages({
        "string.empty" : "Confirm Password is required!!!",
        "any.only" : "Password and Confirm Password is not Match"
    }) 
})
const loginSchema = Joi.object({
    email: Joi.string().required().trim().email(),
    password: Joi.string().required()
})

const validateSchema = (schema) =>(req,res,next)=> {
    //code
   
        const {value, error} = schema.validate(req.body)
        if(error){
            return createError(400, error.details[0].message)
        }
        req.input = value
        next();
   
}

exports.registerValidator = validateSchema(registerSchema)
exports.loginValidator = validateSchema(loginSchema)