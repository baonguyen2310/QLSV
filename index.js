const mysql = require('mysql2');
const mybatisMapper = require('mybatis-mapper');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

// dev: moi truong phat trien
// production: moi truong san pham - main
// test: moi truong kiem thu

// git branch: main
// dev
// test
// feature: 
// git merge:
// git: lich su code

// create the myBatisMapper from xml file
mybatisMapper.createMapper([ './fruits.xml' ]);

// SQL Parameters
var param = {
    category : 'apple',
    price : 100
}

// Get SQL Statement
var format = {language: 'sql', indent: '  '};
var query = mybatisMapper.getStatement('fruit', 'testBasic', param, format);

// Do it!
connection.query(query, function(err, results, fields) {
    console.log(results); 
    console.log(fields);
  });