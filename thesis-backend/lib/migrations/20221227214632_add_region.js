'use strict';

const tableName = 'regions';

exports.up = async (knex) => {

    await knex.schema
        .dropTableIfExists(tableName)
        .createTable(tableName, (table) => {

            table.increments('id').primary();
            table.string('name', 30).notNullable();
        });
};

exports.down = async (knex) => {

    await knex.schema.dropTable(tableName);
};