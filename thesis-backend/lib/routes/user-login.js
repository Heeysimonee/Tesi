'use strict';

const Joi = require('joi');
const { createRoute } = require('../helpers/route_factory');

module.exports = createRoute({
    documentation: {
        resourceTag: 'User',
        description: 'Check user existence',
        response: Joi.object()
    },
    method: 'POST',
    path: '/user/login',
    auth: false,
    validate: {
        payload: Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required()
        })
    },
    handler: async (request, h) => {

        /* Destructuring the services from the request object. */
        const { apiService, userService } = request.services();

        /* Using the spread operator to combine the request.param and request.payload objects into a
        single object. */
        const result = await userService.userLog({ ...request.payload });

        /* Formatting the response to the client. */
        return apiService.formatResponse(h, { result });
    }
});
