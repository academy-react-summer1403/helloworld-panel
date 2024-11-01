import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {token:"",user:{}},
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    handleUser: (state, action) => {
      state.user = action.payload.user;
    },
    logOutUser: (state) => {
      state.token = "";
      state.user = {};
    },
  },
});

export const { setToken, handleUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
