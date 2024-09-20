const express = require('express');
const app = express();
const port = 8000;
const {connectMongoDb} = require('./connection');
const {logReqRes} = require('./middlewares/index');

const userRouter = require('./routes/user');


connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-1')
.then(() =>{
    console.log('Connected to MongoDB');
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Use this for JSON parsing
app.use(logReqRes('task.txt'));

app.use('/api/users',userRouter)

app.listen(port, () => console.log(`Server is running on port ${port}`));
