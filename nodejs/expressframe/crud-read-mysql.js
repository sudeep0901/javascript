var mysql = require('mysql');

var connect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'my_db'
});

var read_R = 'select * from details';

connect.getConnection(function (err, connection) {

    connection.query(read_R, function (err, data) {
        if (err) throw err;
        else {
            console.log(data);
        }

    });
    connection.release();
});