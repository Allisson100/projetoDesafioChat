import io from "socket.io-client";

const webSocketDisconnection = (serverEndpoint) => {

	const socket = io(serverEndpoint);

	socket.disconnect();
};

export default webSocketDisconnection;