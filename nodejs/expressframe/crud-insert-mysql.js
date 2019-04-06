var mysql = require('mysql');

var connect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'my_db'
});

var insert_R = 'insert into details(name, age) VALUE(?, ?)';

connect.getConnection(function (err, connection) {
    connection.query(insert_R, ['sudeep', 34], function (err, res) {
        if (err) throw err;
        else {
            console.log('Details added successfully');
        }
    });
    connection.release();
});


