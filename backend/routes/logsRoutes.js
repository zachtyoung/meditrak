const express = require('express');
const db = require('../helpers/logsDb')
// const bcrypt = require('bcryptjs');
// const restricted = require('../auth/auth-middleware');
const router = express.Router();

router.get('/', (req,res) =>{
    db.getAll().then(logs => {
        res.status(200).json(logs);
    }).catch(err => {
        res.status(500).json({ error: "The logs table could not be retrieved." })
    })
})

module.exports = router;