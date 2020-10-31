var mysql = require('mysql')
var db;

function getConnection() {
    if (!db) {
        db = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'ijse',
            database: 'ThogaKade'
        });
    }
    return db;
}

module.exports = getConnection();