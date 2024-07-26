
const userModels = require('../models/userModel');

const {body, checkSchema, validationResult} = require('express-validator');

const registrationSchema = {
    id: {
        notEmpty: true,
        errorMessage: "Id field cannot be empty"
    },
    name: {
        custom: {
            options: value => {
                return userModels.find({
                    name: value
                }).then(user => {
                    if (user.length > 0) {
                        return Promise.reject('Username already in use')
                    }
                })
            }
        },
        notEmpty: true,
        errorMessage: "Name field cannot be empty"
    },
    contactNo: {
        notEmpty: true,
        errorMessage: "Phone number cannot be empty"
    },
    email: {
        custom: {
            options: value => {
                return userModels.find({
                    email: value
                }).then(email => {
                    if (email.length > 0) {
                        return Promise.reject('Email already in use')
                    }
                })
            }
        },
        notEmpty: true,
        errorMessage: "Email cannot be empty"
    },
    address: {
        notEmpty: true,
        errorMessage: "Address cannot be empty"
        // normalizeEmail: true,
        // custom: {
        //     options: value => {
        //         return User.find({
        //             email: value
        //         }).then(user => {
        //             if (user.length > 0) {
        //                 return Promise.reject('Email address already taken')
        //             }
        //         })
        //     }
        // }
    },
    password: {
        isStrongPassword: {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1
        },
        errorMessage: "Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number",
    },
};
module.exports = {
    registrationSchema: checkSchema(registrationSchema)
};