'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');

module.exports = class Structures extends Schwifty.Model {

    static get tableName() {

        return 'structures';
    }
    // Data extracted from database schema definition
    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer().required(),
            type: Joi.string().required(),
            name: Joi.string().required(),
            description: Joi.string().required(),
            stars: Joi.number(),
            image: Joi.string().required(),
            province: Joi.string().required(),
            region_id: Joi.number().required(),
            age_target: Joi.string().required(),
            experience: Joi.string().required(),
            price: Joi.number().required(),
            discount: Joi.number().required(),
            kids: Joi.bool().required(),
            pets: Joi.bool().required()
        });
    }

    // Creation of the JOIN easyiest way to do it
    get structure_availabilities() {
        
        return this.$relatedQuery('structure_availabilities');
    }
    
    static get relationMappings() {
        // Get the Model with which made the join
        const Availabilities = require('./Availabilities');

        return {

            structures: {
                // Specify the type of relation
                relation: Schwifty.Model.BelongsToOneRelation,
                // The model to check the id
                modelClass: Availabilities,
                // Define the ON part
                join: {
                    from: `${Structures.tableName}.id`,
                    to: `${Availabilities.tableName}.structure_id`
                }
            }
        };
    }
};
