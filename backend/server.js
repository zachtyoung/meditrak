const express = require('express');
const cors = require("cors");
const server = express();
server.use(cors());
server.use(express.json());
const basicAuth = require('express-basic-auth')
const logsRouter = require('./routes/logsRoutes');
const userRouter = require('./routes/userRoutes');
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    next();
  });
  server.use(basicAuth({
    users: { 'admin': 'supersecret' },
    challenge: true,
    realm: 'foo',
  }))
  
  server.use('/logs', logsRouter);
  server.use('/user', userRouter);
  server.get('/', (req, res) => {
    res.send('authorized');

});
module.exports = server;