const express = require('express');
const app = express();
const port = 8000;
const {mongooseConnection} = require('./connection');
const userRoute = require('./routes/users/users')

mongooseConnection('mongodb://127.0.0.1:27017/Students')
.then(()=>{
    console.log("Connection to mongodb successful")
})
.catch(err => console.log("Connection while trying to connect to mongodb"))

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use('/api/Student',userRoute)


app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
})