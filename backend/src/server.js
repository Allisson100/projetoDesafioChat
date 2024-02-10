import "dotenv/config";

import express from "express";
import http from "http";
import { Server } from "socket.io";

import "./db/dbConnect.js";

// eslint-disable-next-line
const PORT = process.env.port || 3000;

const app = express();
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
	cors: {
		origin: "*",
	}
});

httpServer.listen(PORT, () => {
	console.log(`Server running! Port: ${PORT}`);
});

export default io;

