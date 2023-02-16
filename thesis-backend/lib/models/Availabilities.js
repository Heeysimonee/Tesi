'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');

module.exports = class Availabilities extends Schwifty.Model {

    static get tableName() {

        return 'structure_availabilities';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer().required(),
            structure_id: Joi.number().required(),
            start_date: Joi.date().required(),
            end_date: Joi.date().required()
        });
    }
};
