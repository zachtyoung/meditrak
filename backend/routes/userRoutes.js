const express = require('express');
const db = require('../helpers/usersDb')
// const bcrypt = require('bcryptjs');
// const restricted = require('../auth/auth-middleware');
const router = express.Router();


router.get('/', (req,res) =>{
    db.getAll().then(users => {
        res.status(200).json(users);
    }).catch(err => {
        res.status(500).json({ error: "The users table could not be retrieved." })
    })
})

module.exports = router;