const express = require('express');
const cors = require("cors");
const server = express();
server.use(cors());
server.use(express.json());
const logsRouter = require('./routes/logsRoutes');
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    next();
  });
  server.use('/logs', logsRouter);
  server.get('/', (req, res) => {
    res.status(200).json("API RUNNING")

});
module.exports = server;