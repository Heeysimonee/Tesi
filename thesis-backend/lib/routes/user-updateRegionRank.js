'use strict';

const Joi = require('joi');
const { createRoute } = require('../helpers/route_factory');

module.exports = createRoute({
    documentation: {
        resourceTag: 'User',
        description: 'Update the ranking string of the user',
        response: Joi.object()
    },
    method: 'POST',
    path: '/user/{id}/rank_region',
    auth: false,
    validate: {
        params: Joi.object({
            /** User id must be an integer value */
            id: Joi.number().integer()
        }),
        payload: Joi.object({
            region_id: Joi.number().integer()
        })
    },
    handler: async (request, h) => {

        /* Destructuring the services from the request object. */
        const { apiService, userService } = request.services();

        /* Using the spread operator to combine the request.param and request.payload objects into a
        single object. */
        const result = await userService.updateUserTopRank({ ...request.params, ...request.payload });

        /* Formatting the response to the client. */
        return apiService.formatResponse(h, { result });
    }
});
