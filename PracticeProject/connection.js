const mongoose = require('mongoose')

async function mongooseConnection(path){
    await mongoose.connect(path);
}

module.exports = {mongooseConnection};