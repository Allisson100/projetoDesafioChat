import userController from "../controllers/userController.js";
import compareHashs from "./compareHashs.js";
import createJwt from "./createJwt.js";

const authUser = async(userDatas) => {
	const user = await userController.findUserDb(userDatas.username);

	if(user) {

		const auth = compareHashs(userDatas.password, user);

		if(auth) {
			const jwtToken = createJwt({ username: userDatas.username });
			return { message: "jwtToken" , value: jwtToken };
			// socket.emit("auth_success", jwtToken);
		} else {
			return { message: "auth_error" };
			// socket.emit("auth_error");
		}
	} else {
		return { message: "user_not_found" };
		// socket.emit("user_not_found");
	}
};

export default authUser;