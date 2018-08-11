/*
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
*/

const Telegraf = require('telegraf');
const { Markup } = Telegraf;
const app = new Telegraf('671427209:AAHXiSMLorX1baVKssIAEm0kQjaM7mYcohw');

// Start command
app.command('start', ({ reply }) => reply('Welcome, nice to meet you! I can sell you various products. Just ask.'))
