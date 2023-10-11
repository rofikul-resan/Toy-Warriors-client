"use client";

const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return (state = action.payload);
    },
    removeUser: (state) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export const { userReducer } = userSlice.reducer;
