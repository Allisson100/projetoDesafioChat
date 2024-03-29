import io from "socket.io-client";

const serverEndpoint = "http://localhost:3000";

export const socket = io(serverEndpoint);

const webSocketConnection = () => {

	socket.on("connect", () => {
		console.log("Connected to server");

	});

	socket.on("disconnect", () => {
		console.log("Disconnected from server");
	});
};

export default webSocketConnection;