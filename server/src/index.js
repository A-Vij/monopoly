import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import {connectDB} from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import gameRoutes from "./routes/game.route.js"
import { deleteInactiveGames } from "./lib/utils.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));


app.use("/auth", authRoutes);
app.use("/game", gameRoutes);

server.listen(PORT, () => {
    console.log("server running on", PORT);
    connectDB();
    setInterval(deleteInactiveGames, 5*60*1000);
});