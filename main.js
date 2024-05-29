const express = require('express');
const mongoose = require("mongoose");

const routes = require('./src/routes/routes');

const server = express();

server.use(express.json());

server.use(routes);

server.listen(3000, () => {
    mongoose.connect('mongodb+srv://umutyenidil:umtYndl0@cluster0.yes1spt.mongodb.net/', {
        dbName: 'todos-case-db',
    }).then(() => {
        console.log('mongodb connected');
    });
});
