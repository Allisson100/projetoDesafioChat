import userController from "./controllers/userController.js";
import io from "./server.js";
import authUser from "./utils/authUser.js";

io.on("connection", (socket) => {
	console.log("New client connected");

	socket.on("disconnect", () => {
		console.log("Client disconnected");
	});

	socket.on("add_user_db", async (userDatas) => {

		const user = await userController.findUserDb(userDatas.username);

		if(user === null) {
			const result = await userController.addUserDb(userDatas);

			if(result.acknowledged) {
				socket.emit("add_user_db_success");
	
				const result = await authUser(userDatas);
	
				switch (result.message) {
				case "jwtToken":
					socket.emit("auth_success", {jwtToken: result.value, username: userDatas.username});
					break;
						
				case "auth_error":
					socket.emit("auth_error");
					break;
						
				case "user_not_found":
					socket.emit("user_not_found");
					break;
						
				default:
					break;
				}
			} else {
				socket.emit("add_user_db_error");
			}
		} else {
			socket.emit("user_already_exist");
		}

		
	});

	socket.on("auth_user", async (userLoginDatas) => {
		const result = await authUser(userLoginDatas);

		switch (result.message) {
		case "jwtToken":
			socket.emit("auth_success", {jwtToken: result.value, username: userLoginDatas.username});
			break;
					
		case "auth_error":
			socket.emit("auth_error");
			break;
					
		case "user_not_found":
			socket.emit("user_not_found");
			break;
					
		default:
			break;
		}
	});

	socket.on("user_contacts", async (username) => {
		const result = await userController.getUserContactsDb(username);

		if(result) {
			socket.emit("get_user_contacts_success", result);
		} else {
			socket.emit("get_user_contacts_error");
		}
	});

	socket.on("delete_user_contact", async ({id, username}) => {
		const result = await userController.deleteContactsDb(id, username);

		if(result.modifiedCount) {
			socket.emit("delete_user_contacts_success", username);
		} else {
			socket.emit("delete_user_contacts_error");
		}
	});

	socket.on("user_messages", async (username) => {
		const result = await userController.getUserMessagesDb(username);

		if(result) {
			socket.emit("get_user_messages_success", result);
		} else {
			socket.emit("get_user_messages_error");
		}
	});
});