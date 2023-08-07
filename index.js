var express = require('express');
const mysql = require('mysql2');
const mybatisMapper = require('mybatis-mapper');
const bodyParser = require('body-parser');

var app = express();
app.listen(5001, function(){
    console.log('server run with port 5001');
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'QLSV'
});

connection.connect(function(err){
    if (err) {
        console.log('connect database error');
    } else {
        console.log('connect database success');
    }
})

mybatisMapper.createMapper([ './students.xml' ]);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//Đọc tất cả students
app.get('/read-students', function(req, res){
    const query = mybatisMapper.getStatement('students', 'read-students');
    connection.query(query, function(err, results){
        if (err) {
            res.json({
                err: err.message,
                code: 400
            })
        }
        res.json(results)
    })
})

//Thêm 1 student
app.post('/create-student', function(req, res){
    const param = {
        _id : req.body._id,
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    }
    const query = mybatisMapper.getStatement('students', 'create-student', param);
    connection.query(query, function(err, result){
        if (err) {
            res.json({
                err: err.message,
                code: 400
            })
        }
        res.json({
            message: "create success"
        })
    })
})

//Cập nhật 1 student
app.put('/update-student-by-id', (req, res) => {
    const param = {
        _id : req.body._id,
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    }
    const query = mybatisMapper.getStatement('students', 'update-student-by-id', param);
    connection.query(query, function(err, result){
        if (err) {
            res.json({
                err: err.message,
                code: 400
            })
        }
        res.json({
            message: "update success"
        })
    })
})

//Xoá 1 student
app.delete('/delete-student-by-id', function(req, res){
    const param = {
        _id : req.body._id
    }
    const query = mybatisMapper.getStatement('students', 'delete-student-by-id', param);
    connection.query(query, function(err, result){
        if (err) {
            res.json({
                err: err.message,
                code: 400
            })
        }
        res.json({
            message: "delete success"
        })
    })
})