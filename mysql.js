var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'open1906'
});
 
connection.connect((err)=>{
    if(err) throw err;
    console.log('连接成功');
});
 
connection.query('select * from reg', function (error, results, fields) {
  if (error) throw error;
  console.log('查询的数据: ', results);
});
 
connection.end();