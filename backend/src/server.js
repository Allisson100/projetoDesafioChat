import "dotenv/config";
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
// eslint-disable-next-line
const port = process.env.port || 3000;

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
	console.log(`Server running! Port: ${port}`);
});

const io = new Server;

export default io;

