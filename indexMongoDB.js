var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.m9sacf5.mongodb.net/?retryWrites=true&w=majority')
    .then(function() {
        console.log('Ket noi mongodb thanh cong');
    })
    .catch(function(error) {
        console.log(error);
    })   

const studentModel = mongoose.model('student', {
    name: {
        type: String,
        require: true
    },
    age: Number,
    address: String
})

// const student = new studentModel({
//     name: "nguyen van b",
//     age: 23,
//     address: 'Tay Ninh'
// })

// student.save()
//     .then('Insert student thanh cong');

var app = express();

app.get('/students', async function(req, res) {
    //const minAge = req.query.minAge;
    const student = await studentModel.findOneAndUpdate(
        {name: "nguyen van a"},
        {age: 19}
    );
    console.log(student);
    res.json(student);
});

app.listen(5001);