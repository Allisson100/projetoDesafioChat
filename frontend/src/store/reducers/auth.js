import { createSlice }  from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: false,
	reducers: {
		addTokenCookie: (state, { payload }) => {

			// Trazer essas variaveis como objeto no paylaod
			const { key, value } = payload;
			document.cookie = `${key}=${value};path=/`;

			return true;
		},

		getTokenCookie: (state, { payload }) => {

			//A chave do cookie é o payload

			const token = document.cookie
				.split("; ")
				.find((cookie) => cookie.startsWith(`${payload}=`))
				?.split("=")[1];

			if(token) {
				return true;
			} else {
				return false;
			}
		},

		removeTokenCookie: (state, { payload }) => {

			//A chave do cookie é o payload
			// Chamar quando apertar botão logout
			document.cookie = `${payload}=; expires=Thu, 01 Jan 1970 00:00:00`;

			return false;
		}
	}
});

export const { getTokenCookie } = authSlice.actions;

export default authSlice.reducer;