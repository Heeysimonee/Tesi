'use strict';

const Joi = require('joi');
const { createRoute } = require('../helpers/route_factory');

module.exports = createRoute({
    documentation: {
        resourceTag: 'Structure',
        description: 'Get all structure related to a type of vacation in this period',
        response: Joi.object()
    },
    method: 'POST',
    path: '/structures/{region_id}/date',
    auth: false,
    /* Validating the input parameters. */
    validate: {
        params: Joi.object({
            region_id: Joi.number()
        }),
        payload: Joi.object({
            type: Joi.string().valid('all', 'sea', 'city', 'mountain')
            // ordering: Joi.string().valid('ASC', 'DESC').default('ASC')
        })
    },
    handler: async (request, h) => {

        /* Destructuring the request.services() object. */
        const { apiService, structureService } = request.services();

        /* Calling the structureService.getAllStructureInRegion function with the request.params and
        request.payload as parameters. */
        const result = await structureService.getAllStructureInRegionPerDate({ ...request.params, ...request.payload });
        /* Returning the result of the function. */
        return apiService.formatResponse(h, { result });
    }
});
