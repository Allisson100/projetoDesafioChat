import userController from "./controllers/userController.js";
import io from "./server.js";
import authUser from "./utils/authUser.js";

const userSocketMap = new Map();

io.on("connection", (socket) => {
	console.log("New client connected");

	socket.on("disconnect", () => {
		userSocketMap.forEach((socketId, username) => {
			if (socketId === socket.id) {
				userSocketMap.delete(username);
				console.log(`User ${username} disconnected`);
			}
		});

		console.log("Disconnect");
		
	});

	socket.on("send_username_to_server", async(username) => {
		userSocketMap.set(username, socket.id);
	});

	socket.on("user_send_messages", async({message, usernameTosend, whoSent }) => {

		const userSocketId = userSocketMap.get(usernameTosend);

		if(userSocketId) {


			const saveAs = whoSent;

			await userController.saveMessageDb(message, usernameTosend, whoSent, saveAs);
			await userController.saveMessageDb(message, whoSent, usernameTosend, saveAs);
			socket.emit("user_send_messages_success", whoSent);
			io.to(userSocketId).emit("message_to_user_connected", usernameTosend);
		}else {
			const saveAs = whoSent;

			await userController.saveMessageDb(message, usernameTosend, whoSent, saveAs);
			await userController.saveMessageDb(message, whoSent, usernameTosend, saveAs);

			socket.emit("user_send_messages_success", whoSent);
		}
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

	socket.on("find_user", async (username) => {
		const user = await userController.findUserDb(username);

		if(user) {
			socket.emit("find_user_success", user.username);
		} else {
			socket.emit("find_user_error");
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

	socket.on("add_contact", async ({userToAdd , userAuth}) => {
		const result = await userController.addContact(userToAdd, userAuth);

		if(result === "userAlreadyAddedToContactList") {
			socket.emit("add_contact_user_already_added_to_contact_list");
		} else if (result.modifiedCount) {
			socket.emit("add_contact_success", userAuth);
		} else {
			socket.emit("add_contact_error");
		}
	});

	socket.on("delete_user_messages", async ({username, userAuth}) => {
		const result = await userController.deleteMessage(username, userAuth);

		if(result.modifiedCount) {
			socket.emit("delete_user_messages_success", userAuth);
		} else {
			socket.emit("delete_user_messages_error");
		}
	});

	socket.on("create_new_group", async ({userAuth, titleGroup, descriptionGroup, groupUsers}) => {
		const result = await userController.createNewGroup(userAuth, titleGroup, descriptionGroup, groupUsers);

		if(result.modifiedCount) {
			socket.emit("create_new_group_success", userAuth);
		} else {
			socket.emit("create_new_group_error");
		}
	});

	socket.on("get_user_group", async (username) => {
		const result = await userController.findUserDb(username);
		const groups = result.groups.reverse();

		if(result) {
			socket.emit("get_user_group_success", groups);
		} else {
			socket.emit("get_user_group_error");
		}
	});
});