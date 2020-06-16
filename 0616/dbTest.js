//npm i mysql
//node js를 위한 웹 어플리켄이션 프레임워크 Express 사용

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '****',
  database : 'fintech'
});
 
connection.connect();
 
connection.query('SELECT * FROM fintech.user', function (error, results, fields) {
  if (error) throw error;
  console.log('모든 회원 정보: ', results);
});
 
connection.end();