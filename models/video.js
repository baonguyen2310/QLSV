const mongoose = require('mongoose');

const videoModel = mongoose.model('video', {
    name: String,
    description: String,
    createAt: DateTime,
    videoURL: String,
    chanel: String,

})