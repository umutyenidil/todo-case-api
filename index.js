const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const routes = require('./src/routes/routes');

const server = express();

server.use(express.json());

server.use(routes);

const MONGODB_URL = process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost:27017";
server.listen(3000, () => {
    mongoose.connect(MONGODB_URL, {
        dbName: 'todos-case-db',
    }).then(() => {
        console.log('mongodb connected');
    });
});
