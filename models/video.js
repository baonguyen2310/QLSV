const mongoose = require('mongoose');

const videoModel = mongoose.model('video', {
    title: String,
    description: String,
    createAt: DateTime,
    videoURL: String,
    chanel: String,
    
})