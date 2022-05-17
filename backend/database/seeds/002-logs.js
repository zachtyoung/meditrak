/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('logs').del()
  await knex('logs').insert([
    {id: 1, event_date: '2022-05-14', event_time: '09:39:00', duration: 15, user_id:1, med_id:1, mg_dosage:2.5, notes:'this is a note. Seeds ran properly' }
  ]);
};
