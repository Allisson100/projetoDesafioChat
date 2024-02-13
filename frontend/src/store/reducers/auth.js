import { createSlice }  from "@reduxjs/toolkit";
import getToken from "../../utils/getToken";

const authSlice = createSlice({
	name: "auth",
	initialState: () => {
		const token = getToken("jwtToken");
		
		return !!token;
	},
	reducers: {
		addTokenCookie: (state, { payload }) => {

			const { key, value } = payload;
			document.cookie = `${key}=${value};path=/`;

			return true;
		},

		getTokenCookie: (state, { payload }) => {

			const token = getToken(payload);

			if(token) {
				return true;
			} else {
				return false;
			}
		},

		removeTokenCookie: (state, { payload }) => {

			document.cookie = `${payload}=; expires=Thu, 01 Jan 1970 00:00:00`;

			return false;
		}
	}
});

export const { addTokenCookie, getTokenCookie, removeTokenCookie } = authSlice.actions;

export default authSlice.reducer;