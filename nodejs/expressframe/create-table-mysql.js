var mysql = require('mysql');

var connect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'my_db'
});

var table = "CREATE TABLE details (id int(15) NOT NULL AUTO_INCREMENT," +
    "name varchar(30) DEFAULT NULL," +
    "age float(15) DEFAULT NULL," +
    "PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=latin1";

//establishing connection
connect.getConnection(function (err, connection) {
    //creating deteails table   
    connect.query(table, function (err) {
        if (err) throw err;
        else {
            console.log('table created Sucessfully');
        }

    });

    connection.release();

});