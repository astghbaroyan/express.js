'use strict'

import express from 'express';

const app = express();


app.get('/', function (req, res) {
  res.send('Hello World!I am Astgh')
})

app.use(express.static("static")); 
app.get("/", (req, res) => {
   req.require('file.html');
   
});

app.get("/", (req, res) => {
   req.require("/file.json");
   
});

app.get("/", (req, res) => {
    res.send("/file.json");
    
 });

// app.listen(3000);
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
