const db = require('../database/dbConfig');

module.exports = {
    getAll,
    getById,
    insert,
    update,
    remove,
    getBy

  };

  function getAll() {
    return db('logs');
  }
  function getById(id) {
    return db('users')
      .where({ id })
      .first();
  }
  function insert(user) {
    return db('users')
      .insert(user)
      .then(ids => {
        return getById(ids[0]);
      });
  }
  function update(id, changes) {
    return db('users')
      .where({ id })
      .update(changes);
  }
  function remove(id) {
    return db('users')
      .where('id', id)
      .del();
  }
  function getBy(filter) {
    return db('users').where(filter);
  }