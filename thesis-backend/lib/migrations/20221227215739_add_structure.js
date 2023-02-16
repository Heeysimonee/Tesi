'use strict';

const tableName = 'structures';

exports.up = async (knex) => {
  await knex.schema.dropTableIfExists(tableName).createTable(tableName, (table) => {
    table.increments('id').primary();
    table.string('type', 30).notNullable();
    table.string('name', 255).notNullable();
    table.string('description', 1500).notNullable();
    table.integer('stars').unsigned().notNullable();
    table.string('image', 500).notNullable();
    table.string('province', 255).notNullable();
    table.integer('region_id').unsigned().notNullable().references('regions.id');
    table.string('age_target', 255).notNullable();
    table.string('experience', 255).notNullable();
    table.float('price', 10, 2).notNullable();
    table.integer('discount').notNullable();
    table.boolean('kids').notNullable();
    table.boolean('pets').notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(tableName);
};
