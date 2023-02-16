'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');

module.exports = class Users extends Schwifty.Model {

    static get tableName() {

        return 'users';
    }
    // Data extracted from database schema definition
    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer(),
            email: Joi.string().required(),
            password: Joi.string().required(),
            name: Joi.string().required(),
            surname: Joi.string().required(),
            gender: Joi.string().required(),
            age: Joi.number().required(),
            vacation_preferences: Joi.string().required(),
            kids: Joi.bool().required(),
            pets: Joi.bool().required(),
            top: Joi.string().required().allow(''),
            visited: Joi.string().required().allow('')
        });
    }

};
