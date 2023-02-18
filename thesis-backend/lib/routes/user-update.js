'use strict';

const Joi = require('joi');
const { createRoute } = require('../helpers/route_factory');

module.exports = createRoute({
    documentation: {
        resourceTag: 'User',
        description: 'Add a user into db',
        response: Joi.object()
    },
    method: 'POST',
    path: '/user/{id}/update',
    auth: false,
    validate: {
        params: Joi.object({
            id: Joi.number().integer().required()
        }),
        payload: Joi.object({
            name: Joi.string().default('user').allow(null),
            surname: Joi.string().default('user').allow(null),
            gender: Joi.string().default('uomo').allow(null),
            age: Joi.number().default(18).allow(null),
            vacation_preferences: Joi.string().default('no').allow(null),
            visited: Joi.string().default('no').allow(null), //TODO: lalal
            kids: Joi.bool().default(false).allow(null),
            pets: Joi.bool().default(false).allow(null)
        })
    },
    handler: async (request, h) => {

        /* Destructuring the services from the request object. */
        const { apiService, userService } = request.services();

        /* Using the spread operator to combine the request.param and request.payload objects into a
        single object. */
        const result = await userService.updateUser({ ...request.params, ...request.payload });

        /* Formatting the response to the client. */
        return apiService.formatResponse(h, { result });
    }
});
