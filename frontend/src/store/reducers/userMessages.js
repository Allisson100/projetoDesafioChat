import { createSlice }  from "@reduxjs/toolkit";

const userMessagesSlice = createSlice({
	name: "userMessages",
	initialState: [],
	reducers: {
		getUserMessagesDb: (state, { payload }) => {

			return payload;
		},
	}
});

export const { getUserMessagesDb } = userMessagesSlice.actions;

export default userMessagesSlice.reducer;