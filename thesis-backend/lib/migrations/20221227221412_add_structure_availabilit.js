'use strict';

const tableName = 'structure_availabilities';

exports.up = async (knex) => {
  await knex.schema.dropTableIfExists(tableName).createTable(tableName, (table) => {
    table.increments('id').primary();
    table.integer('structure_id').unsigned().notNullable().references('structures.id');
    table.timestamp('start_date').notNullable();
    table.timestamp('end_date').notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(tableName);
};
