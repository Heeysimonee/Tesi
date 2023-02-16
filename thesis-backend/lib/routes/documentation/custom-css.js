'use strict';

module.exports = {
    method: 'GET',
    path: '/documentation/custom.css',
    options: {
        auth: false
    },
    handler: {
        file: {
            path: 'lib/documentation-templates/custom.css'
        }
    }
};
