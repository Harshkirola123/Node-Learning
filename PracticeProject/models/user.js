const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    subjects: [{
        type: String,
    }]
},{timestamps: true})

const Student = mongoose.model('StudentInfo',studentSchema)

module.exports = Student