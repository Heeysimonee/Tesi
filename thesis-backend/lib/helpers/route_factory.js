'use strict';

const Joi = require('joi');

const basePath = '/v1';

const authStrategySchema = Joi.any().valid(false, 'jwt');

const routeOptionsSchema = Joi.object({
    method: Joi.string().valid('GET', 'POST', 'PUT', 'PATCH', 'DELETE').required(),
    path: Joi.string().pattern(/(\/(\w|{|})+)+/),
    handler: Joi.function().arity(2).required(),
    auth: Joi.alternatives(
        authStrategySchema,
        Joi.array().items(authStrategySchema).min(1),
        Joi.object({
            strategies: Joi.array().items(authStrategySchema).min(1).required()
        })
    ).required(),
    validate: Joi.object(),
    documentation: Joi.object(),
    options: Joi.object({
        payload: Joi.object()
    })
});

const documentationOptionsSchema = Joi.object({
    resourceTag: Joi.string(),
    description: Joi.string().required(),
    notes: Joi.array().items(Joi.string()).default([]),
    response: Joi.object().when('disableResponseValidation', { is: Joi.valid(true), then: Joi.forbidden(), otherwise: Joi.required() }),
    disableResponseValidation: Joi.boolean().default(false)
});

/**
 * Check whether or not we are in a development environment.
 * NOTE: this is based on the `NODE_ENV` environment variable.
 */
const isDev = () => process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'testing';

module.exports.createRoute = ({ method, path, handler, auth, validate = {}, documentation, options }) => {

    const optionsValidation = routeOptionsSchema.validate({
        method,
        path,
        handler,
        auth,
        validate,
        documentation
    });

    if (optionsValidation.error) {
        throw new Error(`Route ${path} has invalid options (${optionsValidation.error})`);
    }

    if (Array.isArray(auth)) {
        auth = {
            strategies: auth
        };
    }

    const documentationValidation = documentationOptionsSchema.validate(documentation);

    if (documentationValidation.error) {
        throw new Error(`Route ${path} has invalid documentation options (${documentation.error})`);
    }

    documentation = documentationValidation.value;

    if (!documentation.disableResponseValidation) {
        documentation.response = Joi.object({
            statusCode: Joi.number().integer().valid(200, 404),
            data: documentation.response,
            errors: Joi.array().length(0)
        });
    }

    // TODO: check that `options` does not contan method, path, ...

    const requestFullPath = `${basePath}${path}`;

    // Install a custom handler for validation errors
    validate.failAction = (request, h, err) => {

        const { apiService } = request.services();

        const errMessage = err.output.payload.message;
        request.logger.info({ err, context: 'validate.failAction' }, errMessage);

        return apiService.error(h, 400, err.details.map((d) => d.message)).takeover();
    };

    // Add a note about the missing response validation
    if (documentation.disableResponseValidation) {
        documentation.notes.push('Response validation has been disabled for this route');
    }

    return {
        method,
        path: requestFullPath,
        options: Object.assign({}, {
            tags: ['swag-include'].concat(documentation.resourceTag ? [`resource-${documentation.resourceTag.toLocaleLowerCase()}`] : []),
            description: documentation.description,
            notes: documentation.notes,
            response: {
                // Default validation schema
                // TODO: replace with a function that automatically validates the correct status code
                schema: Joi.object({
                    statusCode: Joi.number().integer().required(),
                    data: Joi.array().required(),
                    errors: Joi.array().items(Joi.string()).required()
                }),
                status: {
                    200: documentation.disableResponseValidation ? true : documentation.response,
                    400: Joi.object({
                        statusCode: Joi.number().integer().valid(400).required(),
                        data: Joi.array().length(0).required(),
                        errors: Joi.array().items(Joi.string()).required()
                    }),
                    404: Joi.object({
                        statusCode: Joi.number().integer().valid(404).required(),
                        data: Joi.array().length(0).required(),
                        errors: Joi.array().items(Joi.string()).required()
                    })
                },
                failAction: (request, h, err) => {

                    const { apiService } = request.services();

                    request.logger.warn({ err, context: 'response.failAction' }, 'Error while validating response format');

                    return apiService.error(h, 500, ['Response validation error', ...(isDev() ? [err.message] : [])]).takeover();
                }
            },
            validate,
            auth,
            handler: async (request, h) => {

                return await handler(request, h);
            }
        }, options)
    };
};
