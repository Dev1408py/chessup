const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser');
const path = require('path');
const connectTOMongo = require('./db');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });//seting the path as the .env is in the parent folder


const app = express();
const server = http.createServer(app); 
const io = new Server(server);

connectTOMongo();

// app.use(bodyParser);

app.get('/',(req,res)=>{
    res.send("<h1>Works</h1>");
})

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg); 
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const PORT = process.env.Server_Port || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

