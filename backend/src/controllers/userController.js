import { usersCollection } from "../db/dbConnect.js";
import createHashAndSaltPassword from "../utils/createHashAndSaltPassword.js";

const userController = {
	addUserDb: async({ username, password }) => {
		try {
			const { hashPassword, saltPassword } = createHashAndSaltPassword(password);

			const result = await usersCollection.insertOne({
				username,
				hashPassword,
				saltPassword
			});

			return result;
		} catch (error) {
			console.log(error); 
		}
	},

	findUserDb: async(username) => {
		try {

			const user = usersCollection.findOne({
				username
			});

			return user;
			
		} catch (error) {
			console.log(error);
		}
	}
};

export default userController;