// src/validation/students.js

import Joi from 'joi';

const addFlatErrorMessages = {
    'string.base': 'Field {#label} must be a string.',
    'string.empty': 'Field {#label} cannot be empty.',
    'string.min': 'Field {#label} should have a minimum length of {#limit}.',
    'string.max': 'Field {#label} should have a maximum length of {#limit}.',
    'any.required': 'missing required {#label} field',
    'number.base': 'Field {#label} must be a number.',
    'number.empty': 'Field {#label} cannot be empty.'
};

export const createFlatSchema = Joi.object({
    street: Joi.string().min(4).max(40).required().messages(addFlatErrorMessages),
    house: Joi.string().min(1).max(10).required().messages(addFlatErrorMessages),
    new: Joi.boolean().required().messages(addFlatErrorMessages),
    beds: Joi.number().integer().messages(addFlatErrorMessages),
    sofa: Joi.number().integer().messages(addFlatErrorMessages),
    bath: Joi.number().integer().messages(addFlatErrorMessages),
    pool: Joi.number().integer().messages(addFlatErrorMessages),
    price: Joi.number().integer().required().messages(addFlatErrorMessages),
    area: Joi.string().min(4).max(10).required().messages(addFlatErrorMessages),
    district: Joi.string().min(5).max(25).required().messages(addFlatErrorMessages),
    isVerified: Joi.object().required().messages(addFlatErrorMessages).keys({
        boolean: Joi.boolean().messages(addFlatErrorMessages),
        amountRooms: Joi.string().max(25).messages(addFlatErrorMessages),
        floor: Joi.string().max(50).required().messages(addFlatErrorMessages),
        developer: Joi.string().max(50).messages(addFlatErrorMessages),
    }),
    complex: Joi.object().required().messages(addFlatErrorMessages).keys({
        name: Joi.string().min(3).max(40).required().messages(addFlatErrorMessages),
        parking: Joi.string().max(50).messages(addFlatErrorMessages),
        yard: Joi.string().max(100).messages(addFlatErrorMessages),
        decoration: Joi.string().max(300).messages(addFlatErrorMessages),
        building: Joi.string().max(50).messages(addFlatErrorMessages),
        howManyFloors: Joi.string().max(25).messages(addFlatErrorMessages),
        heating: Joi.string().max(25).messages(addFlatErrorMessages),
        walls: Joi.string().max(50).messages(addFlatErrorMessages),
        insulating: Joi.string().max(50).messages(addFlatErrorMessages),
        contract: Joi.string().max(50).required().messages(addFlatErrorMessages),
        ceiling: Joi.string().max(50).messages(addFlatErrorMessages),
        class: Joi.string().max(25).messages(addFlatErrorMessages),
        amountApartments: Joi.string().max(30).messages(addFlatErrorMessages),
    }),
});

export const updateFlatSchema = Joi.object({
    street: Joi.string().min(4).max(40).messages(addFlatErrorMessages),
    house: Joi.string().min(1).max(10).messages(addFlatErrorMessages),
    new: Joi.boolean().messages(addFlatErrorMessages),
    beds: Joi.number().integer().messages(addFlatErrorMessages),
    sofa: Joi.number().integer().messages(addFlatErrorMessages),
    bath: Joi.number().integer().messages(addFlatErrorMessages),
    pool: Joi.number().integer().messages(addFlatErrorMessages),
    price: Joi.number().integer().messages(addFlatErrorMessages),
    area: Joi.string().min(4).max(10).messages(addFlatErrorMessages),
    district: Joi.string().min(5).max(25).messages(addFlatErrorMessages),
    isVerified: Joi.object().messages(addFlatErrorMessages).keys({
        boolean: Joi.boolean().messages(addFlatErrorMessages),
        amountRooms: Joi.string().max(25).messages(addFlatErrorMessages),
        floor: Joi.string().max(50).messages(addFlatErrorMessages),
        developer: Joi.string().max(50).messages(addFlatErrorMessages),
    }),
    complex: Joi.object().messages(addFlatErrorMessages).keys({
        name: Joi.string().min(3).max(40).messages(addFlatErrorMessages),
        parking: Joi.string().max(50).messages(addFlatErrorMessages),
        yard: Joi.string().max(100).messages(addFlatErrorMessages),
        decoration: Joi.string().max(300).messages(addFlatErrorMessages),
        building: Joi.string().max(50).messages(addFlatErrorMessages),
        howManyFloors: Joi.string().max(25).messages(addFlatErrorMessages),
        heating: Joi.string().max(25).messages(addFlatErrorMessages),
        walls: Joi.string().max(50).messages(addFlatErrorMessages),
        insulating: Joi.string().max(50).messages(addFlatErrorMessages),
        contract: Joi.string().max(50).messages(addFlatErrorMessages),
        ceiling: Joi.string().max(50).messages(addFlatErrorMessages),
        class: Joi.string().max(25).messages(addFlatErrorMessages),
        amountApartments: Joi.string().max(30).messages(addFlatErrorMessages),
    }),
});
