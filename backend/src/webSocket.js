import userController from "./controllers/userController.js";
import io from "./server.js";

io.on("connection", (socket) => {
	console.log("New client connected");

	socket.on("disconnect", () => {
		console.log("Client disconnected");
	});

	socket.on("add_user_db", async (userDatas) => {
		const result = await userController.addUserDb(userDatas);

		if(result.acknowledged) {
			socket.emit("add_user_db_success");
		} else {
			socket.emit("add_user_db_error");
		}
	});
});