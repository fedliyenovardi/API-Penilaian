var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1',
    database:'penilaian'
});

conn.connect(function(err){
    if (err) throw err;
});

module.exports = conn;