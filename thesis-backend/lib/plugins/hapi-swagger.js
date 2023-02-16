'use strict';

const Package = require('../../package.json');
const { resolve } = require('path');

module.exports = (server, options) => {

    return {
        plugins: {
            options: {
                info: {
                    title: 'API Documentation',
                    version: Package.version,
                    description: 'This is the documentation of the backend API for the Visita',
                    contact: {
                        name: 'Simone Cattaneo',
                        email: 'simone.cattaneo919@edu.unito.it'
                    }
                },
                routeTag: 'swag-include',
                schemes: ['http'],
                auth: false,
                host: server.settings.app.publicHostname,
                cors: true,
                documentationPath: '/documentation/index',
                jsonPath: '/documentation/swagger.json',
                jsonRoutePath: '/documentation/swagger.json',
                swaggerUIPath: '/documentation/swaggerui',
                routesBasePath: '/documentation/swaggerui',
                templates: resolve(__dirname, '..', 'documentation-templates'),
                grouping: 'tags',
                tagsGroupingFilter: (tag) => tag.startsWith('')
            }
        }
    };
};
