const express = require('express');
const pg = require('pg');
const redis = require('redis');
const amqp = require('amqp/callback_api');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/postgres/:blurb', (req, res) => {
  const ip = req.connection.remoteAddress
});
