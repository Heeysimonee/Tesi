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
    path: '/user/add',
    auth: false,
    validate: {
        payload: Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required(),
            name: Joi.string().default('user').allow(null),
            surname: Joi.string().default('user').allow(null),
            gender: Joi.string().default('uomo').allow(null),
            age: Joi.number().default(18).allow(null),
            vacation_preferences: Joi.string().default('no').allow(null),
            kids: Joi.bool().default(false).allow(null),
            pets: Joi.bool().default(false).allow(null)
        })
    },
    handler: async (request, h) => {

        /* Destructuring the services from the request object. */
        const { apiService, userService } = request.services();

        /* Using the spread operator to combine the request.param and request.payload objects into a
        single object. */
        const result = await userService.addUser({ ...request.payload, top: '', visited: '' });

        /* Formatting the response to the client. */
        return apiService.formatResponse(h, { result });
    }
});
