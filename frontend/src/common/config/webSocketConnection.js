import io from "socket.io-client";

const socket = io("http://localhost:3000");

const webSocketConnection = {
	clientConnected: () => {
		socket.on("connect", () => {
			console.log("Connected to server");
		});
	},

	clientDisconnected: () => {
		socket.on("disconnect", () => {
			console.log("Disconnected from server");
		});
	},

	disconnectServer: () => {
		socket.disconnect();
	}
};

export default webSocketConnection;