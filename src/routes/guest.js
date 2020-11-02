require('dotenv').config();

const router = require('express').Router();
const mysql = require('../dbconfig');

// post guest 
router.post('/', (req, res) => {
    const {
        prefix,
        name,
        suffix,
        address,
        category_id,
        phone,
        email,
    } = req.body;
    const token = Math.floor(Math.random() * 10000) + 1;

    const sql = 'INSERT INTO guest (prefix,name,suffix,address,category_id,token,phone,email) VALUES(?,?,?,?,?,?,?,?)';

    mysql.execute(sql, [prefix, name, suffix, address, category_id, token, phone, email], (err, result, field) => {
        res.send(result);
        console.log(err);
    })
})


module.exports = router;
