import io from "socket.io-client";

const webSocketConnection = (serverEndpoint) => {

	const socket = io(serverEndpoint);

	socket.on("connect", () => {
		console.log("Connected to server");
	});

	socket.on("disconnect", () => {
		console.log("Disconnected from server");
	});
};

export default webSocketConnection;