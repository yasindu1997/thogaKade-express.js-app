var express = require('express')
const connection = require("../db/db_connection");

var router = express.Router()

router.get('/', function (req, res) {
    connection.query('SELECT * FROM Customer', function (err, rows) {
        if (err) throw err
        res.json(rows)
    })
})

router.post('/', function (req, res) {
    connection.query('INSERT INTO Customer VALUES(?,?,?,?)', [req.headers.id, req.headers.name, req.headers.address, req.headers.salary], function (err, rows) {
        if (err) throw err
        res.json(rows);
    })
})

router.delete('/', function (req, res) {
    connection.query('DELETE FROM Customer WHERE id=?', req.headers.id, function (err, rows) {
        if (err) throw err
        res.json(rows)
    })
})

router.put('/', function (req, res) {
    connection.query('UPDATE Customer set name=?, address=?, salary=? WHERE id=?', [req.headers.name, req.headers.address, req.headers.salary, req.headers.id], function (err, rows) {
        if (err) throw err
        res.json(rows)
    })
})

module.exports = router
