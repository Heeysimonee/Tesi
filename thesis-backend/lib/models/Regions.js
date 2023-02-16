'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');

module.exports = class Regions extends Schwifty.Model {

    static get tableName() {

        return 'regions';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer(),
            name: Joi.string().required()
        });
    }
    // Creation of the JOIN easyiest way to do it
    get structures() {

        return this.$relatedQuery('structures');
    }

    static get relationMappings() {
        // Get the Model with which made the join
        const Structures = require('./Structures');

        return {

            structures: {
                // Specify the type of relation
                relation: Schwifty.Model.BelongsToOneRelation,
                // The model to check the id
                modelClass: Structures,
                // Define the ON part
                join: {
                    from: `${Regions.tableName}.id`,
                    to: `${Structures.tableName}.region_id`
                }
            }
        };
    }
};
