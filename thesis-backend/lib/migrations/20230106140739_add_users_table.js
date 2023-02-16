'use strict';
const tableName = 'users';

exports.up = async (knex) => {
  await knex.schema.dropTableIfExists(tableName).createTable(tableName, (table) => {
    table.increments('id').primary(),
      table.string('email', 255).notNullable(),
      table.string('password', 255).notNullable(),
      table.string('name', 255).notNullable(),
      table.string('surname', 255).notNullable(),
      table.string('gender', 255).notNullable(),
      table.integer('age').notNullable(),
      table.string('vacation_preferences', 255).notNullable(),
      table.boolean('kids').notNullable(),
      table.boolean('pets').notNullable(),
      table.string('top', 255).notNullable();
      table.string('visited', 255).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(tableName);
};
