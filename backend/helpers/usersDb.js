const db = require('../database/dbConfig');

module.exports = {
    getAll
  };

  function getAll() {
    return db('logs');
  }