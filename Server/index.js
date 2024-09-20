const http = require('http');
const express = require('express');
const url = require('url');

const app = express();

app.get('/',(req,res) =>{
    return res.send("Hello from home page!");
})

app.get('/about',(req,res) =>{
    return res.end(`Hello from about page ${req.query.name}`);
})

app.post('/signup',(req,res) =>{})

// const myServer = http.createServer(app);
// myServer.listen(8000,()=>{});
app.listen(8000,()=>{console.log("server Start")}); 