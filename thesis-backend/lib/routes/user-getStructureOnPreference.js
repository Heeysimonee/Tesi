'use strict';

const Joi = require('joi');
const { createRoute } = require('../helpers/route_factory');

module.exports = createRoute({
    documentation: {
        resourceTag: 'User',
        description: 'Get structures based on user info',
        response: Joi.object()
    },
    method: 'POST',
    path: '/user/{id}/user_preference_feature',
    auth: false,
    validate: {
        params: Joi.object({
            /** User id must be an integer value */
            id: Joi.number().integer()
        }),
        payload: Joi.object({
            type: Joi.string()
        })
    },
    handler: async (request, h) => {

        /* Destructuring the services from the request object. */
        const { apiService, userService } = request.services();

        /* Using the spread operator to combine the request.param and request.payload objects into a
        single object. */
        const result = await userService.getUserPreferenceHints({ ...request.params, ...request.payload });

        /* Formatting the response to the client. */
        return apiService.formatResponse(h, { result });
    }
});
