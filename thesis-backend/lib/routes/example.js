'use strict';

const Joi = require('joi');
const { createRoute } = require('../helpers/route_factory');

module.exports = createRoute({
    documentation: {
        resourceTag: 'example',
        description: 'example route',
        response: Joi.object({})
    },
    method: 'GET',
    path: '/example',
    auth: false,
    handler: (request, h) => {
        const { apiService, structureService } = request.services();
        structureService.getAllStructure({ type: 'sea' });
        return apiService.formatResponse(h, {});
    }
});
