const request = require('supertest');
const assert = require('assert');
const express = require('express');
const { copy } = require('./02-ratelimitter');
const { log } = require('console');

const app = express();
let requestCount = 0;

app.use(function(req,res,next){
  requestCount+=1;
  next();
})
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

app.use("/", function(req,res){
  res.status(404).send("Invalid route");
})


app.listen(3000, function(req,res){
  console.log("Server is listening to port 3000");
})

module.exports = app;