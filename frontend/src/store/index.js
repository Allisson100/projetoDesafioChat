import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./reducers/auth";
import usernameSlice from "./reducers/username";
import userMessagesSlice from "./reducers/userMessages";
import userContactsSlice from "./reducers/userContacts";


const store = configureStore({
	reducer: {
		auth: authSlice,
		username: usernameSlice,
		userMessages: userMessagesSlice,
		userContacts: userContactsSlice,
	}
});

export default store;