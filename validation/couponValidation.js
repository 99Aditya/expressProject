const {body, checkSchema, validationResult} = require('express-validator');

const couponValidations = {
    name: {
        notEmpty: true,
        errorMessage: "Name cannot be empty"
    },
}

module.exports = {
    couponValidation: checkSchema(couponValidations)
};