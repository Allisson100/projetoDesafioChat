import { createSlice }  from "@reduxjs/toolkit";

const userContactsSlice = createSlice({
	name: "userContacts",
	initialState: [],
	reducers: {
		getUserContactsDb: (state, { payload }) => {

			return payload;
		},
	}
});

export const { getUserContactsDb } = userContactsSlice.actions;

export default userContactsSlice.reducer;