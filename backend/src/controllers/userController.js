import { usersCollection } from "../db/dbConnect.js";
import createHashAndSaltPassword from "../utils/createHashAndSaltPassword.js";

const userController = {
	addUserDb: async({ username, password }) => {
		try {
			const { hashPassword, saltPassword } = createHashAndSaltPassword(password);

			const result = await usersCollection.insertOne({
				username,
				hashPassword,
				saltPassword,
				contacts: [],
				messages: []
			});

			return result;
		} catch (error) {
			console.log(error); 
		}
	},

	findUserDb: async(username) => {
		try {

			const user = await usersCollection.findOne({
				username
			});

			return user;
			
		} catch (error) {
			console.log(error);
		}
	},

	getUserContactsDb: async(username) => {
		try {

			const user = await usersCollection.findOne({
				username
			});

			return user.contacts;
			
		} catch (error) {
			console.log(error);
		}
	},

	getUserMessagesDb: async(username) => {
		try {

			const user = await usersCollection.findOne({
				username
			});

			return user.messages;
			
		} catch (error) {
			console.log(error);
		}
	}
};

export default userController;