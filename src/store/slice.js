import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },

    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { logout, login } = profileSlice.actions;

export default profileSlice.reducer;
