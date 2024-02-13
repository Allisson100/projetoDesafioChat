import { socket } from "../common/config/webSocketConnection";

const webSocketEvents = {

	addUserDb: (userDatas) => {

		const newUserDatas = {
			username: userDatas.username,
			password: userDatas.password
		};

		socket.emit("add_user_db", newUserDatas);
	},

	authUser: (userLoginDatas) => {
		socket.emit("auth_user", userLoginDatas);
	},

	getContactsDb: (username) => {
		socket.emit("user_contacts", username);
	},

	deleteContactsDb: ({id, username}) => {
		socket.emit("delete_user_contact", {id, username});
	},


	getUserMessagesDb: (username) => {
		socket.emit("user_messages", username);
	}
};

export default webSocketEvents;