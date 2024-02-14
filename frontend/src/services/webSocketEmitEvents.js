import { socket } from "../common/config/webSocketConnection";

const webSocketEvents = {

	sendUSernameToServer: (username) => {
		socket.emit("send_username_to_server", username);
	},

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

	findUserDb: (username) => {
		socket.emit("find_user", username);
	},

	getContactsDb: (username) => {
		socket.emit("user_contacts", username);
	},

	addContactDb: (username) => {
		socket.emit("add_contact", username);
	},

	deleteContactsDb: ({id, username}) => {
		socket.emit("delete_user_contact", {id, username});
	},

	getUserMessagesDb: (username) => {
		socket.emit("user_messages", username);
	},

	sendMessage: (message, usernameTosend, userWhoSent) => {
		socket.emit("user_send_messages", {message, usernameTosend, whoSent: userWhoSent });
	},

	deleteMessage: (username, userAuth) => {
		socket.emit("delete_user_messages", {username, userAuth});
	},

	createNewGroup: (userAuth, titleGroup, descriptionGroup, groupUsers) => {
		socket.emit("create_new_group", {userAuth, titleGroup, descriptionGroup, groupUsers});
	},

	getUSerGroups: (username) => {
		socket.emit("get_user_group", username);
	},
};

export default webSocketEvents;