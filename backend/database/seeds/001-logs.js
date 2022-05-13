/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('logs').del()
  await knex('logs').insert([
    {id: 1, date: 'today'}
  ]);
};
