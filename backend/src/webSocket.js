import userController from "./controllers/userController.js";
import io from "./server.js";
import authUser from "./utils/authUser.js";
import createJwt from "./utils/createJwt.js";

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

	socket.on("auth_user", async (userLoginDatas) => {
		const user = await userController.findUserDb(userLoginDatas.username);
		if(user) {

			const auth = authUser(userLoginDatas.password, user);

			if(auth) {
				const jwtToken = createJwt({ username: userLoginDatas.username });
				socket.emit("auth_success", jwtToken);
			} else {
				socket.emit("auth_error");
			}
		} else {
			socket.emit("user_not_found");
		}
	});
});