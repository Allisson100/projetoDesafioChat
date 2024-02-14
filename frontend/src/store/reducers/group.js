import { createSlice }  from "@reduxjs/toolkit";

const groupSlice = createSlice({
	name: "group",
	initialState: [],
	reducers: {
		addUserToGroup: (state, { payload }) => {
			return [...state, payload];
		},

		removeOneUSer: (state, { payload }) => {
			const newState = state.filter((element) => element !== payload);

			return newState;
		},

		removeAllUsers: () => {
			return [];
		}
	}
});

export const { addUserToGroup,removeOneUSer, removeAllUsers } = groupSlice.actions;

export default groupSlice.reducer;