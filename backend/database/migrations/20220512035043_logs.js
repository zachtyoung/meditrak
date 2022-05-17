/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('logs', function(logs) {
      logs.increments('id');
      logs.date('event_date');
      logs.time('event_time');
      logs.integer('duration');
      logs.integer('user_id').unsigned().notNullable().references('id').inTable('users');
      logs.integer('med_id').unsigned().notNullable().references('id').inTable('meds');
      logs.float('mg_dosage')
      logs.string('notes')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('logs');
};
