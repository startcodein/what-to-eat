// import express from 'express';
var express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Hello world mate !");
});

app.listen(port, (err) => {
  console.log('Server runs on localhost:3000')
});
