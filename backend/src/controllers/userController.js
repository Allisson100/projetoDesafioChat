import { ObjectId } from "mongodb";
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

	deleteContactsDb: async(id, username) => {
		try {

			const result = await usersCollection.updateOne(
				{username: username},
				{ $pull: { contacts: { _id: new ObjectId(id) } } }
			);

			return result;
			
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
	},

	addContact: async(userToAdd, userAuth) => {
		try {

			const user = await usersCollection.findOne({
				username: userAuth
			});

			const findContact = user.contacts.some(obj => obj.contactName === userToAdd);

			if(findContact) {
				return "userAlreadyAddedToContactList";
			}

			const result = await usersCollection.updateOne(
				{ username: userAuth },
				{ $push: { contacts: {  _id: new ObjectId(), contactName: userToAdd } } },
			);

			return result;
			
		} catch (error) {
			console.log(error);
		}
	},

	saveMessageDb: async(message, usernameTosend, whoSent, saveAs) => {
		try {

			const newObject = {
				_id: new ObjectId(),
				text: message,
				whoSent: saveAs,
				createdAt: new Date(),
			};

			const objectEmptyMessages = {
				username: whoSent,
				textMessages: [
					{
						_id: new ObjectId(),
						text: message,
						whoSent: saveAs,
						createdAt: new Date(),
					}
				]
			};

			const existingDocument = await usersCollection.findOne({ 
				username: usernameTosend,
				messages: { $elemMatch: { username: whoSent } }
			});

			if (!existingDocument || existingDocument.messages.length === 0) {

				const result = await usersCollection.updateOne(
					{ username: usernameTosend },
					{ $push: { messages: { $each: [objectEmptyMessages], $position: 0 } } }
				);

				return result;
			} else {
				const result = await usersCollection.updateOne(
					{ 
						username: usernameTosend,
						messages: { $elemMatch: { username: whoSent } }
					},
					{ $push: { "messages.$.textMessages": { $each: [newObject], $position: 0 } } }
				);
				return result;
			}
			
		} catch (error) {
			console.log(error);
		}
	},

	deleteMessage: async(username, userAuth) => {
		try {

			const result = await usersCollection.updateOne(
				{ username: userAuth },
				{ $pull: { messages: { username: username } } } 
			);
			return result;
			
		} catch (error) {
			console.log(error);
		}
	},

};

export default userController;