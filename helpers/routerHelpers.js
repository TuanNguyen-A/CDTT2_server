const Joi = require('@hapi/joi')

const validateBody = (schema) => {
    return (req, res, next) => {
        console.log("HERE", req.body)
        const validatorResult = schema.validate(req.body)

        if (validatorResult.error) {
            return res.status(400).json(validatorResult.error)
        } else {
            if (!req.value) req.value = {}
            if (!req.value['params']) req.value.params = {}

            req.value.body = validatorResult.value
            next()
        }
    }
}

const validateParam = (schema, name) => {
    return (req, res, next) => {
        const validatorResult = schema.validate({param: req.params[name]})

        if (validatorResult.error) {
            return res.status(400).json(validatorResult.error)
        } else {
            if (!req.value) req.value = {}
            if (!req.value['params']) req.value.params = {}

            req.value.params[name] = req.params[name]
            next()
        }
    }
}

const schemas = {
    authSignInSchema: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    }),

    authSignUpSchema: Joi.object().keys({
        fullName: Joi.string().min(2).required(),
        email: Joi.string().email().required(),
        phoneNumber: Joi.string().min(2).required(),
        password: Joi.string().min(6).required(),
        address: Joi.string().min(2).required(),
        role: Joi.string().min(2).required(),
    }),

    idSchema: Joi.object().keys({
        param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
    }),
}

module.exports = {
    validateBody,
    validateParam,
    schemas
}