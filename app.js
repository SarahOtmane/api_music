const express = require('express')
const app = express()  
const port = 3000

const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/apiMusic');

app.use(express.urlencoded());
app.use(express.json())

const musicRoute = require('./routes/musicRoute.js');
app.use('/', musicRoute);

const voteRoute = require('./routes/voteRoute.js');
app.use('/', voteRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})