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
    const is_active = 1;
    const sql = 'INSERT INTO guest (prefix,name,suffix,address,category_id,token,phone,email,is_active) VALUES(?,?,?,?,?,?,?,?,?)';

    mysql.execute(sql, [prefix, name, suffix, address, category_id, token, phone, email, is_active], (err, data, field) => {
        res.send({
            status: 200,
            data,
        });
        console.log(err);
    })
})

// put guest
router.put('/:id', (req, res) => {
    const {
        id
    } = req.params;
    const {
        prefix,
        name,
        suffix,
        address,
        category_id,
        phone,
        email,
    } = req.body;
    const sql = `UPDATE guest SET prefix=?, name=?, suffix=?, address=?, category_id=?, phone=?, email=? WHERE id=?`;
    mysql.execute(sql, [prefix, name, suffix, address, category_id, phone, email, id], (err, data, field) => {
        res.send({
            status: 200,
            data
        });
        console.log(err);
    })
})


// get guest
router.get('/', (req, res) => {
    const sql = `select guest.id, prefix, name, suffix, address, category_id, token, phone, email, is_active, created_at, updated_at from guest order by id asc limit 0,10`
    mysql.execute(sql, [], (err, data, field) => {
        res.send({
            status: 200,
            data
        });
    })
})

// delete guest
router.delete('/:id', (req, res) => {
    const {
        id
    } = req.params;
    const sql = 'DELETE FROM guest WHERE id=?';
    mysql.execute(sql, [id], (err, data, field) => {
        res.send({
            status: 200,
            data
        });
        console.log(err);
    })
})



module.exports = router;
