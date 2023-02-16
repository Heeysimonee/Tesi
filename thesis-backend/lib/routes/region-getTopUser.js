'use strict';

const Joi = require('joi');
const { createRoute } = require('../helpers/route_factory');

module.exports = createRoute({
    documentation: {
        resourceTag: 'Region',
        description: 'Get top regions for user',
        response: Joi.object()
    },
    method: 'POST',
    path: '/regions/top',
    auth: false,
    /* Validating the payload. */
    validate: {
        payload: Joi.object({
            id: Joi.number().integer()
        })
    },
    handler: async (request, h) => {

        /* Destructuring the `request.services()` object. */
        const { apiService, regionService } = request.services();

        /* Calling the `getTopRegions` function in the `regionService` and passing in the payload from
        the request. */
        const result = await regionService.getTopRegions(
            /* A spread operator. It is taking the payload
               from the request and spreading it out into the function. */
            { ...request.payload }
        );
        /* Returning the response from the API. */
        return apiService.formatResponse(h, { result });
    }
});
