const Joi = require("joi");

module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema, {abortEarly: false});
            if (result.error) {
                let err_msg = {};
                for (let counter in result.error.details) {
                    let key = result.error.details[counter].context.key;
                    let val = result.error.details[counter].message;
                    err_msg[key] = val;
                }
                let return_err = {status: 2, errors: err_msg};
                return res.status(400).json(return_err);
            }

            if (!req.value) {
                req.value = {};
            }
            req.value["body"] = result.value;
            next();
        }
    },
    schemas: {
        body_validates: Joi.object().keys({
            filecontent: Joi.string().required().min(1).regex(/^#([A-Fa-f0-9])$/, "Only HexaDecimal value allowed").max(16),
            filename: Joi.string().required().min(1).max(10),
            isSpecial: Joi.boolean().invalid(false)
        })
    }
}