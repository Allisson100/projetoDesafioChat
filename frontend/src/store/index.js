import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./reducers/auth";
import usernameSlice from "./reducers/username";
import userMessagesSlice from "./reducers/userMessages";
import userContactsSlice from "./reducers/userContacts";
import loadingSlice from "./reducers/loading";


const store = configureStore({
	reducer: {
		auth: authSlice,
		username: usernameSlice,
		userMessages: userMessagesSlice,
		userContacts: userContactsSlice,
		loading: loadingSlice,
	}
});

export default store;