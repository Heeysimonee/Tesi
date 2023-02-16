'use strict';

const Joi = require('joi');
const { createRoute } = require('../helpers/route_factory');

module.exports = createRoute({
    documentation: {
        resourceTag: 'Region',
        description: 'Get all regions',
        response: Joi.object()
    },
    method: 'POST',
    path: '/regions',
    auth: false,
    handler: async (request, h) => {

        /* Destructuring the services from the request object. */
        const { apiService, regionService } = request.services();

        /* Calling the `getRegions` method on the `regionService` object. */
        const result = await regionService.getRegions();

        /* Formatting the response to the client. */
        return apiService.formatResponse(h, { result });
    }
});
