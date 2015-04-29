var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'angelia',
    password: '****',
    database:'staff',
    port: 3306
});
conn.connect();

for(var i = 0; i < 50; i++) {
	
	var name = '';
	var age = Math.floor(Math.random() * 101);
	var indexNum = Math.floor(Math.random() * 4) + 5;
	
	for(var j = 0; j < indexNum; j++) {
		var codeNum = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
		name += unescape('%' + codeNum.toString(16));
	}

	var insertSql = 'insert into developer(name, age) values("'+ name + '", ' + age + ')';
	conn.query(insertSql, function (err, res) {
		if(err) console.log(err);
	});

}