const express = require('express');
const DB = require('../Class/DB/DB');
const router = express.Router();
const Database = new DB;

router.post('/start', (req, res) => {
    console.log(req.body);
})

module.exports = router