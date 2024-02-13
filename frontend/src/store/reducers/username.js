import { createSlice }  from "@reduxjs/toolkit";
import localStorageMethods from "../../utils/localStorageMethods";

const usernameSlice = createSlice({
	name: "username",
	initialState: () => {
		const username = localStorageMethods.getItem("username");

		if(username) return username;

		return "";
	},
	reducers: {
		getUsernameLocalStorage: (state, { payload }) => {

			const username = localStorageMethods.getItem(payload);
			return username;
		}
	}
});

export const { getUsernameLocalStorage } = usernameSlice.actions;

export default usernameSlice.reducer;