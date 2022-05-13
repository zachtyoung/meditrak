/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  await knex('meds').del()
  await knex('meds').insert([
    {id: 1, name: 'lexapro'},
  ]);
};
