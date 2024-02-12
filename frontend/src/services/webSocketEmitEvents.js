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
	}
};

export default webSocketEvents;