'use strict';

const Glue = require('@hapi/glue');
const Manifest = require('./manifest');

exports.deployment = async (start) => {

    const manifest = Manifest.get('/');

    const server = await Glue.compose(manifest, { relativeTo: __dirname });

    await server.initialize();

    if (!start) {
        return server;
    }

    await server.start();

    return server;
};

if (require.main === module) { // If in the main module (i.e., we have been called directly from the node CLI)

    exports.deployment(true);

    process.on('unhandledRejection', (err) => {

        throw err;
    });
}
