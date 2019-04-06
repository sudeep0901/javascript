var mysql = require('mysql');

var connect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'my_db'
});

var update_R = 'update details set age = ? where name = ?';

connect.getConnection(function (err, connection) {

    connection.query(update_R,[35, 'sudeep'],function(err, data){
        if (err) throw err;
        else{
            console.log('row updated succesfully');
        }

    });
    connection.release();
});