import { createSlice }  from "@reduxjs/toolkit";

const groupDbSlice = createSlice({
	name:"groupdb",
	initialState: [],
	reducers: {
		getGroupsDb: (state, { payload }) => {
			return payload;
		}
	}
});

export const { getGroupsDb } = groupDbSlice.actions;

export default groupDbSlice.reducer;