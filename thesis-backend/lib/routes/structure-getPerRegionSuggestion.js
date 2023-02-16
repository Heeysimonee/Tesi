'use strict';

const Joi = require('joi');
const { createRoute } = require('../helpers/route_factory');

module.exports = createRoute({
    documentation: {
        resourceTag: 'Structure',
        description: 'Get all structure related to a type of vacation',
        response: Joi.object()
    },
    method: 'POST',
    path: '/structures/suggested',
    auth: false,
    validate: {
        payload: Joi.object({
            type: Joi.string().valid('all', 'sea', 'city', 'mountain'),
            user_id: Joi.number()
        })
    },
    handler: async (request, h) => {

        /* Destructuring the request.services() object. */
        const { apiService, structureService } = request.services();

        /* Calling the `getAllStructureInRegionSuggested` function in the `structureService` and
        passing the payload of the request as an argument. */
        const result = await structureService.getAllStructureInRegionSuggested({ ...request.payload });
        /* Returning the result of the function `getAllStructureInRegionSuggested` in the
        `structureService` */
        return apiService.formatResponse(h, { result });
    }
});
