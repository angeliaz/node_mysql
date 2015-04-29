var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'angelia',
    password: '****',
    database:'staff',
    port: 3306
});
conn.connect();
// conn.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//     if (err) throw err;
//     console.log('The solution is: ', rows[0].solution);
// });
// 

var selectSQL = 'select * from develop limit 10';
var insertSQL = 'insert into develop(id, name) values(2, "beenle")';
var updateSQl = 'update develop set id=3,name="zhang" where id=1';
var deleteSQl = 'delete from develop where id = 2';

var alterSQL = 'alter table develop add age int';
var dropSQL = 'drop table develop';


// select
conn.query(selectSQL, function (err, res) {
	if(err) console.log(err);
	console.log('SELECT return ==>');
	console.log(res);
});

// insert
conn.query(insertSQL, function (err, res) {
	if(err) console.log(err);
	console.log('INSERT return ==>');
	console.log(res);
});


//update
conn.query(updateSQl, function (err, res) {
	if(err) console.log(err);
});

//delete
conn.query(deleteSQl, function (err, res) {
	if(err) console.log(err);
});

// alter
conn.query(dropSQL, function (err, res) {
	if(err) console.log(err);
});


conn.end();