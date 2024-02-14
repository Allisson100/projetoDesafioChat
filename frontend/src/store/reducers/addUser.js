import { createSlice }  from "@reduxjs/toolkit";

const addUserSlice = createSlice({
	name: "addUSer",
	initialState: "",
	reducers: {
		userFound: (state, { payload }) => {
			return payload;
		},

		removeUser: () => {
			return "";
		}
	}
});

export const { userFound, removeUser } = addUserSlice.actions;

export default addUserSlice.reducer;