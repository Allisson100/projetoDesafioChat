import { createSlice }  from "@reduxjs/toolkit";

const usernameSlice = createSlice({
	name: "username",
	initialState: "",
	reducers: {
		addUsername: (state, { payload }) => {

			return payload;
		},
	}
});

export const { addUsername } = usernameSlice.actions;

export default usernameSlice.reducer;