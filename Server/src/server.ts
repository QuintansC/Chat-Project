import express, { Request, Response } from "express";
import http from 'http';
import { Server } from "socket.io";
import cors from 'cors';
const app = express();
app.use(express.json());

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    socket.on('message', msg => {
        console.log(msg)
        io.emit('message', msg);
    });
});

server.listen(3333, () => {
    console.log('listening on port: 3333');
});