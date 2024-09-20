const mongoose = require('mongoose')

async function connectMongoose(path){
    await mongoose.connect(path)
}

module.exports = {connectMongoose}