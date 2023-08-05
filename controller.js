const mysql = require('mysql2');
const mybatisMapper = require('mybatis-mapper');

mybatisMapper.createMapper([ './student.xml' ]);

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'QLSV'
});

function getStudentsByName(req, res) {
    var param = {
        name : req.query.name
    }

    var query = mybatisMapper.getStatement('student', 'getStudentsByName', param);

    connection.query(query, function(err, results, fields) {
        if (err) {
            res.json({
                message: err.message,
                code: 400
            })
        }
        console.log(results); 
        res.json(results);
    });
}

module.exports.getStudentsByName = getStudentsByName;