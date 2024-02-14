import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./reducers/auth";
import usernameSlice from "./reducers/username";
import userMessagesSlice from "./reducers/userMessages";
import userContactsSlice from "./reducers/userContacts";
import loadingSlice from "./reducers/loading";
import addUserSlice from "./reducers/addUser";
import groupSlice from "./reducers/group";
import groupDbSlice from "./reducers/groupDb";


const store = configureStore({
	reducer: {
		auth: authSlice,
		username: usernameSlice,
		userMessages: userMessagesSlice,
		userContacts: userContactsSlice,
		loading: loadingSlice,
		addUSer: addUserSlice,
		group: groupSlice,
		groupDb: groupDbSlice,
	}
});

export default store;