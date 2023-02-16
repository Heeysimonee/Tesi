'use strict';

const Schwifty = require('schwifty');

const { DB_SERVICE, DB_USER: user, DB_PASSWORD: password, DB_NAME: database } = process.env;

if (!DB_SERVICE) {
    throw new Error('Database not defined');
}

const [host, port] = DB_SERVICE.split(':');

module.exports = {
    client: 'postgres',
    useNullAsDefault: true,
    connection: {
        host,
        port,
        user,
        password,
        database
    },
    migrateOnStart: false,
    migrations: {
        stub: Schwifty.migrationsStubPath,
        directory: 'lib/migrations'
    }
};
