'use strict';

module.exports = {
    plugins: {
        options: {
            migrateOnStart: false,
            knex: require('../../knexfile'),
            migrationsDir: `${__dirname}/../migrations`
        }
    }
};
