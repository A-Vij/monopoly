import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST"]
    },
});

const userSocketMap = {};

export function getSocket(userId) {
    return userSocketMap[userId];
}

io.on("connect", (socket) => {
    console.log("a user connected", socket.id);
    
    const userId = socket.handshake.query.userId;
    if (userId) userSocketMap[userId] = socket;


    socket.on("disconnect", () => {
        console.log("a user disconnected", socket.id);
    });
});
export { io, app, server };