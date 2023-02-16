'use strict';

exports.seed = async (knex) => {

    console.info('\n[INFO]: running cleanup seeder\n');

    const deleteTables = async (tableNames) => {

        for (const tableName of tableNames) {
            if (await knex.schema.hasTable(tableName)) {
                console.info(`[INFO]: deleting table ${tableName}`);
                await knex(tableName).del();
            }
            else {
                console.info(`[WARN]: table ${tableName} does not exist. Skipping.`);
            }
        }
    };

    await deleteTables([
        'structure_availabilities',
        'structures',
        'regions',
        'users'
    ]);
};
