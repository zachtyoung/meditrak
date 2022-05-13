const express = require('express');
const db = require('../helpers/medsDb')
// const bcrypt = require('bcryptjs');
// const restricted = require('../auth/auth-middleware');
const router = express.Router();


router.get('/', (req,res) =>{
    db.getAll().then(meds => {
        res.status(200).json(meds);
    }).catch(err => {
        res.status(500).json({ error: "The meds table could not be retrieved." })
    })
})
router.post('/', (req,res) =>{
    res.status(200).json('meds post endpoint')
})

module.exports = router;