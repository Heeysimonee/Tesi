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
    path: '/structures',
    auth: false,
    /* Validating the payload of the request. */
    validate: {
        payload: Joi.object({
            /* The key 'type' has to be a string and can have only this 3 values */
            type: Joi.string().valid('all', 'sea', 'city', 'mountain')
        })
    },
    handler: async (request, h) => {

        /* Destructuring the services from the request object. */
        const { apiService, structureService } = request.services();
        /* Calling the structureService.getAllStructure function with the request.payload as a parameter. */
        const result = await structureService.getAllStructure({ ...request.payload });
        /* Formatting the response to the client. */
        return apiService.formatResponse(h, { result });
    }
});
